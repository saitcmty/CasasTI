require 'test_helper'

class RedirectsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @redirect = redirects(:one)
  end

  test "should get index" do
    get redirects_url
    assert_response :success
  end

  test "should get new" do
    get new_redirect_url
    assert_response :success
  end

  test "should create redirect" do
    assert_difference('Redirect.count') do
      post redirects_url, params: { redirect: { code: @redirect.code, event_id: @redirect.event_id, evidence_id: @redirect.evidence_id } }
    end

    assert_redirected_to redirect_url(Redirect.last)
  end

  test "should show redirect" do
    get redirect_url(@redirect)
    assert_response :success
  end

  test "should get edit" do
    get edit_redirect_url(@redirect)
    assert_response :success
  end

  test "should update redirect" do
    patch redirect_url(@redirect), params: { redirect: { code: @redirect.code, event_id: @redirect.event_id, evidence_id: @redirect.evidence_id } }
    assert_redirected_to redirect_url(@redirect)
  end

  test "should destroy redirect" do
    assert_difference('Redirect.count', -1) do
      delete redirect_url(@redirect)
    end

    assert_redirected_to redirects_url
  end
end
