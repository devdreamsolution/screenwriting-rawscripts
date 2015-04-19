"""create unread notes table

Revision ID: 335f7e6b9db3
Revises: 23f00f06c871
Create Date: 2015-04-18 20:57:13.470762

"""

# revision identifiers, used by Alembic.
revision = '335f7e6b9db3'
down_revision = '23f00f06c871'

from alembic import op
import sqlalchemy as sa


def upgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.create_table('unread_notes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('resource_id', sa.String(), nullable=True),
    sa.Column('thread_id', sa.String(), nullable=True),
    sa.Column('user', sa.String(), nullable=True),
    sa.Column('msg_id', sa.String(), nullable=True),
    sa.Column('timestamp', sa.DateTime(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index('ix_unread_notes_resource_id', 'unread_notes', ['resource_id'], unique=False)
    op.create_index('ix_unread_notes_thread_id', 'unread_notes', ['thread_id'], unique=False)
    op.create_index('ix_unread_notes_user', 'unread_notes', ['user'], unique=False)
    ### end Alembic commands ###


def downgrade():
    ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('ix_unread_notes_user', table_name='unread_notes')
    op.drop_index('ix_unread_notes_thread_id', table_name='unread_notes')
    op.drop_index('ix_unread_notes_resource_id', table_name='unread_notes')
    op.drop_table('unread_notes')
    ### end Alembic commands ###
