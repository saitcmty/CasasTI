require 'test_helper'

class MeControllerTest < ActionDispatch::IntegrationTest
  test "should get show" do
    get me_show_url
    assert_response :success
  end

end
