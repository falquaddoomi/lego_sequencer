from flask import json
import os

from flask import Flask
from flask_cors import CORS

from sequencer.cache import cache


def create_app(test_config=None):
    # create and configure the app
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object('sequencer.default_settings')
    app.config.from_mapping(
        SECRET_KEY='dev',
        DATABASE=os.path.join(app.instance_path, 'sequencer.sqlite'),
        # CACHE_DIR=os.path.join(app.instance_path, 'cache'),
        # CACHE_TYPE="filesystem"
    )
    app.config.from_pyfile('application.cfg', silent=True)

    # allow the dev server to hit our api, too
    CORS(app, resources={r'/*': {'origins': '*'}})
    # also enable caching backend
    cache.init_app(app, config={
        'CACHE_DIR': os.path.join(app.instance_path, 'cache'),
        'CACHE_TYPE': "filesystem"
    })

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile('config.py', silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    # inject database management
    from . import db
    db.init_app(app)

    # inject api endpoints
    from . import api
    app.register_blueprint(
        api.bp,
        GCE_KEY=app.config['GCE_KEY'],
        GCE_PROJECT_CX=app.config['GCE_PROJECT_CX']
    )

    # inject frontend-serving bits
    from . import frontend
    app.register_blueprint(frontend.bp)

    return app
