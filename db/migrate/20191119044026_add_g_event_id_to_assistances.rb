class AddGEventIdToAssistances < ActiveRecord::Migration[5.2]
  def change
    add_column :assistances, :g_event_id, :string
  end
end
