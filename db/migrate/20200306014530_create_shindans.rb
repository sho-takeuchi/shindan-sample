class CreateShindans < ActiveRecord::Migration[5.2]
  def change
    create_table :shindans do |t|

      t.timestamps
    end
  end
end
