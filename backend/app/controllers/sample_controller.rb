class SampleController < ApplicationController
  def current_time
    render json: { 'current_time': Time.now() }
  end
end
