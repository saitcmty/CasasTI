require "application_system_test_case"

class EvidencesTest < ApplicationSystemTestCase
  setup do
    @evidence = evidences(:one)
  end

  test "visiting the index" do
    visit evidences_url
    assert_selector "h1", text: "Evidences"
  end

  test "creating a Evidence" do
    visit evidences_url
    click_on "New Evidence"

    fill_in "Date", with: @evidence.date
    fill_in "Deadline", with: @evidence.deadline
    fill_in "Img url", with: @evidence.img_url
    fill_in "Points", with: @evidence.points
    fill_in "Title", with: @evidence.title
    click_on "Create Evidence"

    assert_text "Evidence was successfully created"
    click_on "Back"
  end

  test "updating a Evidence" do
    visit evidences_url
    click_on "Edit", match: :first

    fill_in "Date", with: @evidence.date
    fill_in "Deadline", with: @evidence.deadline
    fill_in "Img url", with: @evidence.img_url
    fill_in "Points", with: @evidence.points
    fill_in "Title", with: @evidence.title
    click_on "Update Evidence"

    assert_text "Evidence was successfully updated"
    click_on "Back"
  end

  test "destroying a Evidence" do
    visit evidences_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Evidence was successfully destroyed"
  end
end
