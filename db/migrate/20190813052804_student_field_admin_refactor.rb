class StudentFieldAdminRefactor < ActiveRecord::Migration[5.2]
  def up
    rename_column :students, :is_admin, :admin
  end
  def down
    rename_column :students, :admin, :is_admin
  end
end
