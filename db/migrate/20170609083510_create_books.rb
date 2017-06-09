class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.integer :like_count,  default: 0
      t.boolean :editable,    default: false

      t.timestamps
    end
  end
end
