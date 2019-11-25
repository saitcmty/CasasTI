# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_11_24_173022) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "assistances", force: :cascade do |t|
    t.string "student_id", null: false
    t.bigint "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "g_event_id"
    t.index ["student_id", "event_id"], name: "index_assistances_on_student_id_and_event_id", unique: true
  end

  create_table "events", force: :cascade do |t|
    t.string "title", null: false
    t.string "place", null: false
    t.datetime "start", null: false
    t.datetime "finish"
    t.text "description"
    t.string "img_url"
    t.string "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "evidences", force: :cascade do |t|
    t.integer "points"
    t.string "title", null: false
    t.string "img_url"
    t.datetime "deadline", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "houses", primary_key: "name", id: :string, force: :cascade do |t|
    t.integer "house_points"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "internships", force: :cascade do |t|
    t.string "title"
    t.text "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "redirects", force: :cascade do |t|
    t.string "code"
    t.bigint "event_id"
    t.bigint "evidence_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id"], name: "index_redirects_on_event_id"
    t.index ["evidence_id"], name: "index_redirects_on_evidence_id"
  end

  create_table "registrations", force: :cascade do |t|
    t.string "student_id", null: false
    t.bigint "evidence_id", null: false
    t.string "proof"
    t.boolean "approved", null: false
    t.datetime "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "justification"
    t.integer "assigned_points"
    t.index ["student_id", "evidence_id"], name: "index_registrations_on_student_id_and_evidence_id", unique: true
  end

  create_table "students", primary_key: "tec_id", id: :string, force: :cascade do |t|
    t.string "f_name", null: false
    t.string "l_name", null: false
    t.boolean "admin", null: false
    t.string "email", null: false
    t.string "profile_img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "house_id"
    t.string "google_token"
    t.string "google_refresh_token"
    t.string "provider"
    t.string "uid"
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "assistances", "events"
  add_foreign_key "assistances", "students", primary_key: "tec_id"
  add_foreign_key "registrations", "evidences"
  add_foreign_key "registrations", "students", primary_key: "tec_id"
  add_foreign_key "students", "houses", primary_key: "name"
end
