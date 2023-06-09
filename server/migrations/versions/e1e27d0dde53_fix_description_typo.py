"""fix description typo

Revision ID: e1e27d0dde53
Revises: dd5f8f52f88a
Create Date: 2023-06-02 13:17:31.113560

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e1e27d0dde53'
down_revision = 'dd5f8f52f88a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('description', sa.String(), nullable=True))
        batch_op.drop_column('descripiton')

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('descripiton', sa.VARCHAR(), nullable=True))
        batch_op.drop_column('description')

    # ### end Alembic commands ###
