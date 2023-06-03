from flask import Flask, request, make_response
from flask_cors import CORS
from flask_migrate import Migrate
from flask_restful import Api, Resource

from models import db, User, Game, Library, Review, Friend

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)
migrate = Migrate(app, db)
db.init_app(app)
api = Api(app)

class Index(Resource):

    def get(self):
        return make_response("Stream API Index", 200)

class Users(Resource):

    def get(self):
        users = [user.to_dict() for user in User.query.all()]
        return users, 200
    
    def post(self):
        try:
            data = request.get_json()
            new_user = User(
                username   = data["username"],
                avatar_url = data["avatar_url"]
            )
            db.session.add(new_user)
            db.session.commit()
            return new_user.to_dict(), 201
        except Exception as e:
            return e
    
class UserById(Resource):

    def get(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            return {"error": "User not found"}, 404
        return user.to_dict(), 200
    
    def patch(self, id):
        try:
            data = request.get_json()
            user = User.query.filter_by(id=id).first()
            if not user:
                return {"error": "User not found"}, 404
            for attr in data:
                setattr(user, attr, data[attr])
            db.session.add(user)
            db.session.commit()
            return user.to_dict(), 200
        except Exception as e:
            return e

    def delete(self, id):
        user = User.query.filter_by(id=id).first()
        if not user:
            return {"error": "User not found"}, 404
        db.session.delete(user)
        db.session.commit()
        return {}, 204

class Games(Resource):

    def get(self):
        games = [game.to_dict() for game in Game.query.all()]
        return games, 200
    
    def post(self):
        try:
            data = request.get_json()
            new_game = Game(
                title        = data["title"],
                image_url    = data["image_url"],
                description  = data["description"],
                genre        = data["genre"],
                developer    = data["developer"],
                release_date = data["release_date"]
            )
            db.session.add(new_game)
            db.session.commit()
            return new_game.to_dict(), 201
        except Exception as e:
            return e
    
class GameById(Resource):

    def get(self, id):
        game = Game.query.filter_by(id=id).first()
        if not game:
            return {"error": "Game not found"}, 404
        return game.to_dict(), 200
    
class Reviews(Resource):

    def get(self):
        reviews = [review.to_dict() for review in Review.query.all()]
        return reviews, 200
    
    def post(self):
        try:
            data = request.get_json()
            new_review = Review(
                rating      = data["rating"],
                title       = data["title"],
                description = data["description"],
                user_id     = data["user_id"],
                game_id     = data["game_id"],
            )
            db.session.add(new_review)
            db.session.commit()
            return new_review.to_dict(), 201
        except Exception as e:
            return e
    
class ReviewById(Resource):

    def get(self, id):
        review = Review.query.filter_by(id=id).first()
        if not review:
            return {"error": "Review not found"}, 404
        return review.to_dict(), 200
    
class Libraries(Resource):

    def get(self):
        libraries = [library.to_dict() for library in Library.query.all()]
        return libraries, 200
    
    def post(self):
        try:
            data = request.get_json()
            new_library = Library(
                user_id = data["user_id"],
                game_id = data["game_id"]
            )
            db.session.add(new_library)
            db.session.commit()
            return new_library.to_dict(), 201
        except Exception as e:
            return e
    
class LibraryById(Resource):

    def get(self, id):
        library = Library.query.filter_by(id=id).first()
        if not library:
            return {"error": "Library not found"}, 404
        return library.to_dict(), 200
    
class Friends(Resource):

    def get(self):
        friends = [friend.to_dict() for friend in Friend.query.all()]
        return friends, 200
    
    def post(self):
        try:
            data = request.get_json()
            new_friend = Friend(
                friendship_status = data["friendship_status"],
                user1_id          = data["user1_id"],
                user2_id          = data["user2_id"]
            )
            db.session.add(new_friend)
            db.session.commit()
            return new_friend.to_dict(), 201
        except Exception as e:
            return e
    
class FriendById(Resource):

    def get(self, id):
        friend = Friend.query.filter_by(id=id).first()
        if not friend:
            return {"error": "Friend not found"}, 404
        return friend.to_dict(), 200
  
api.add_resource(Index, '/')
api.add_resource(Users, '/users')
api.add_resource(UserById, '/users/<int:id>')
api.add_resource(Games, '/games')
api.add_resource(GameById, '/games/<int:id>')
api.add_resource(Reviews, '/reviews')
api.add_resource(ReviewById, '/reviews/<int:id>')
api.add_resource(Libraries, '/libraries')
api.add_resource(LibraryById, '/libraries/<int:id>')
api.add_resource(Friends, '/friends')
api.add_resource(FriendById, '/friends/<int:id>')

if __name__ == '__main__':
    app.run(port = 5555, debug = True)