require_relative './cookie_bag.rb' # grab all the code from ./cookie_bag.rb
require_relative './cookie.rb'

c1 = Cookie.new(5, 10)
c2 = Cookie.new(10, 20)
c3 = Cookie.new(20, 30)
c4 = Cookie.new(30, 40)
c5 = Cookie.new(40, 50)
c6 = Cookie.new(50, 60)

bag = CookieBag.new(5)

p bag
bag.add(c1)
p bag
bag.add({flour: 40, sugar: 10})
bag.add(Cookie.new(400, 500))
bag.add(c3).add(c4).add(c5).add(c6)
p bag