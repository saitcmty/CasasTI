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

ActiveRecord::Schema.define(version: 2019_07_15_135626) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "assistances", force: :cascade do |t|
    t.string "student_id", null: false
    t.bigint "event_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id", "event_id"], name: "index_assistances_on_student_id_and_event_id", unique: true
  end

  create_table "events", force: :cascade do |t|
    t.string "title", null: false
    t.date "start_date", null: false
    t.time "start_time", null: false
    t.date "end_date", null: false
    t.time "end_time", null: false
    t.text "description"
    t.string "img_url"
    t.string "link"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "evidences", force: :cascade do |t|
    t.integer "points", null: false
    t.string "title", null: false
    t.datetime "date"
    t.string "img_url"
    t.datetime "deadline"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "houses", primary_key: "name", id: :string, force: :cascade do |t|
    t.integer "house_points"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "redirects", force: :cascade do |t|
    t.string "code"
    t.bigint "evidence_id"
    t.bigint "event_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["event_id", "evidence_id"], name: "index_redirects_on_event_id_and_evidence_id", unique: true
  end

  create_table "registrations", force: :cascade do |t|
    t.string "student_id"
    t.bigint "evidence_id"
    t.string "proof"
    t.boolean "approved"
    t.datetime "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["student_id", "evidence_id"], name: "index_registrations_on_student_id_and_evidence_id", unique: true
  end

  create_table "students", primary_key: "tec_id", id: :string, force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "house_id"
  end

  add_foreign_key "assistances", "events"
  add_foreign_key "assistances", "students", primary_key: "tec_id"
  add_foreign_key "redirects", "events"
  add_foreign_key "redirects", "evidences"
  add_foreign_key "registrations", "evidences"
  add_foreign_key "registrations", "students", primary_key: "tec_id"
  add_foreign_key "students", "houses", primary_key: "name"
end
