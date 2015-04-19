"""create title page table

Revision ID: 45ef91c289fb
Revises: 335f7e6b9db3
Create Date: 2015-04-19 11:37:28.230068

"""

# revision identifiers, used by Alembic.
revision = '45ef91c289fb'
down_revision = '335f7e6b9db3'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.create_table('title_page_data',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('resource_id', sa.String(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('authorOne', sa.String(), nullable=True),
    sa.Column('authorTwo', sa.String(), nullable=True),
    sa.Column('authorTwoChecked', sa.String(), nullable=True),
    sa.Column('authorThree', sa.String(), nullable=True),
    sa.Column('authorThreeChecked', sa.String(), nullable=True),
    sa.Column('based_on', sa.String(), nullable=True),
    sa.Column('based_onChecked', sa.String(), nullable=True),
    sa.Column('address', sa.String(), nullable=True),
    sa.Column('addressChecked', sa.String(), nullable=True),
    sa.Column('phone', sa.String(), nullable=True),
    sa.Column('phoneChecked', sa.String(), nullable=True),
    sa.Column('cell', sa.String(), nullable=True),
    sa.Column('cellChecked', sa.String(), nullable=True),
    sa.Column('email', sa.String(), nullable=True),
    sa.Column('emailChecked', sa.String(), nullable=True),
    sa.Column('registered', sa.String(), nullable=True),
    sa.Column('registeredChecked', sa.String(), nullable=True),
    sa.Column('other', sa.String(), nullable=True),
    sa.Column('otherChecked', sa.String(), nullable=True),
    sa.PrimaryKeyConstraint('id'),
    sa.UniqueConstraint('resource_id')
    )
    op.create_index('ix_title_page_data_resource_id', 'title_page_data', ['resource_id'], unique=False)
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_title_page_data_resource_id', table_name='title_page_data')
    op.drop_table('title_page_data')
    ### end Alembic commands ###
