class Book < ApplicationRecord
  default_scope { order( created_at: :asc) }
  validates :title, :like_count, :editable, presence: true
end
