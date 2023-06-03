"""change releasedate data type

Revision ID: dd5f8f52f88a
Revises: 597a97c8809b
Create Date: 2023-06-02 13:16:07.605577

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'dd5f8f52f88a'
down_revision = '597a97c8809b'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('games', schema=None) as batch_op:
        batch_op.alter_column('release_date',
               existing_type=sa.DATETIME(),
               type_=sa.String(),
               existing_nullable=True)

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('games', schema=None) as batch_op:
        batch_op.alter_column('release_date',
               existing_type=sa.String(),
               type_=sa.DATETIME(),
               existing_nullable=True)

    # ### end Alembic commands ###
