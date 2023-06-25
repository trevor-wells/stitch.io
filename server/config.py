from flask import Flask
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from dotenv import load_dotenv
load_dotenv() #reading variables from .env file

#load_dotenv() needs to be run before importing cloudinary
import cloudinary
config = cloudinary.config(secure=True)

#log the configuration
print("**** set up and configure the SDK:****\n",
      config.cloud_name, "\n", config.api_key, "\n")

app = Flask(__name__)
app.secret_key = b'Y\xf1Xz\x00\xad|eQ\x80t \xca\x1a\x10K'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
metadata = MetaData(naming_convention={"fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",})
db = SQLAlchemy(metadata=metadata)

migrate = Migrate(app, db)
db.init_app(app)

bcrypt = Bcrypt(app)

api = Api(app)