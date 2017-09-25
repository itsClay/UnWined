class CreateCheckins < ActiveRecord::Migration[5.1]
  def change
    create_table :checkins do |t|
      t.integer :rating, null: false
      t.string :comment
      t.integer :wine_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end
    add_index :checkins, [:user_id, :wine_id]
  end
end
