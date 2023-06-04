from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from config import db, bcrypt

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    serialize_rules = ('-libraries.user', '-reviews.user', '-games.users', '-libraries.game', '-reviews.game')

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String)
    _password_hash = db.Column(db.String)
    avatar_url = db.Column(db.String)

    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    libraries = db.relationship('Library', back_populates = 'user')
    reviews = db.relationship('Review', back_populates = 'user')
    games = association_proxy('libraries', 'game')

    @hybrid_property
    def password_hash(self):
        raise AttributeError('Password hashes may not be viewed.')

    @password_hash.setter
    def password_hash(self, password):
        password_hash = bcrypt.generate_password_hash(
            password.encode('utf-8'))
        self._password_hash = password_hash.decode('utf-8')

    def authenticate(self, password):
        return bcrypt.check_password_hash(
            self._password_hash, password.encode('utf-8'))
    
    def __repr__(self):
        return f'<User {self.id}>'
    
    @validates('username')
    def validate_username(self, key, value):
        if not value:
            raise ValueError("Must have a username!")
        return value

class Game(db.Model, SerializerMixin):
    __tablename__ = 'games'

    serialize_rules = ('-libraries.game', '-reviews.game', '-libraries.user', '-reviews.user')

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String)
    image_url = db.Column(db.String)
    description = db.Column(db.String)
    genre = db.Column(db.String)
    developer = db.Column(db.String)
    release_date = db.Column(db.String)

    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    libraries = db.relationship('Library', back_populates = 'game')
    reviews = db.relationship('Review', back_populates = 'game')
    users = association_proxy('libraries', 'user')

    def __repr__(self):
        return f'<Game {self.id}>'

class Library(db.Model, SerializerMixin):
    __tablename__ = 'libraries'

    serialize_rules = ('-user.libraries', '-game.libraries', '-user.reviews', '-game.reviews')

    id = db.Column(db.Integer, primary_key = True)

    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'))

    user = db.relationship('User', back_populates = 'libraries')
    game = db.relationship('Game', back_populates = 'libraries')

    def __repr__(self):
        return f'<Library {self.id}>'

class Review(db.Model, SerializerMixin):
    __tablename__ = 'reviews'

    serialize_rules = ('-user.reviews', '-game.reviews', '-user.libraries', '-game.libraries')

    id = db.Column(db.Integer, primary_key = True)
    rating = db.Column(db.Integer)
    title = db.Column(db.String)
    description = db.Column(db.String)

    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    game_id = db.Column(db.Integer, db.ForeignKey('games.id'))

    user = db.relationship('User', back_populates = 'reviews')
    game = db.relationship('Game', back_populates = 'reviews')

    def __repr__(self):
        return f'<Review {self.id}>'

class Friend(db.Model, SerializerMixin):
    __tablename__ = 'friends'

    serialize_rules = ('-user1.friends', '-user2.friends', '-user1.libraries', '-user1.reviews', '-user2.libraries', '-user2.reviews')

    id = db.Column(db.Integer, primary_key = True)
    friendship_status = db.Column(db.String)

    created_at = db.Column(db.DateTime, server_default = db.func.now())
    updated_at = db.Column(db.DateTime, onupdate = db.func.now())

    user1_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    user2_id = db.Column(db.Integer, db.ForeignKey('users.id'))

    user1 = db.relationship('User', foreign_keys = [user1_id])
    user2 = db.relationship('User', foreign_keys = [user2_id])

    def __repr__(self):
        return f'<Friend {self.id}>'


