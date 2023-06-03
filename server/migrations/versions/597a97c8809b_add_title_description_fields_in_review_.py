"""add title, description fields in Review table

Revision ID: 597a97c8809b
Revises: bc22ada50fb0
Create Date: 2023-06-02 12:43:43.410438

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '597a97c8809b'
down_revision = 'bc22ada50fb0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('title', sa.String(), nullable=True))
        batch_op.add_column(sa.Column('descripiton', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.drop_column('descripiton')
        batch_op.drop_column('title')

    # ### end Alembic commands ###
