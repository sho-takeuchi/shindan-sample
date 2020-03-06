class ShindansController < ApplicationController
  def index
    @shindans = Shindan.all
  end
end
