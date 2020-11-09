class CookieBag

  def initialize(capacity)
    @capacity = capacity
    @cookies = []
  end

  def add(obj)
    # .is_a? is a method on objects that checks if a object is a instance of a particular class
    # the obj we try to put in the bag is not a Cookie
    # early exit
    return puts "Must be a cookie" unless obj.is_a?(Cookie)
    # if !obj.is_a? CookieBag
    #   return puts "Must be a cookie"
    # end

    if @cookies.length < @capacity
      @cookies.push(obj)
    else
      puts "No room left"
    end

    self
  end

end