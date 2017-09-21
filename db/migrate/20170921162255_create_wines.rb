class CreateWines < ActiveRecord::Migration[5.1]
  def change
    create_table :wines do |t|
      t.string :vineyard, null: false
      t.string :wine_type, null: false
      t.string :location, null: false
      t.integer :year, null: false
      t.string :img_url, null: false

      t.timestamps
    end
    add_index :wines, :vineyard
  end
end
