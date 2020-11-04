class DropRedirects < ActiveRecord::Migration[5.2]
  def change
    drop_table :redirects
  end
end
