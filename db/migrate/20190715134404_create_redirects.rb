class CreateRedirects < ActiveRecord::Migration[5.2]
  def change
    create_table :redirects do |t|
      t.string :code
      t.bigint :evidence_id, null: false
      t.bigint :event_id, null: false

      t.timestamps
    end

    add_foreign_key :redirects, :events, column: :event_id
    add_foreign_key :redirects, :evidences, column: :evidence_id

    add_index :redirects, [:event_id, :evidence_id], :unique => true
  end
end
