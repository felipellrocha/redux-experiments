from sqlalchemy import (
  create_engine,
  Column,
  Integer,
  String,
)
from sqlalchemy.orm import (
  scoped_session,
  sessionmaker,
  relationship,
  backref
)
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('sqlite:///database.sqlite3', convert_unicode=True)
db_session = scoped_session(sessionmaker(
  autocommit=False,
  autoflush=False,
  bind=engine
))

Base = declarative_base()

Base.query = db_session.query_property()

class Product(Base):
  __tablename__ = 'artesanato_product'
  id = Column(Integer, primary_key=True)
  title = Column(String)
