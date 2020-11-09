def pluck(array_of_hash,key_to_look )
    result = []
    for hash in array_of_hash
      result << hash[key_to_look]
    end
    p result
  end
  pluck([{a:1}, {a:2}], :a) #=>[1,2]
  pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :a)
  pluck([{b:2}, {a:4, b:4}, {a:1}, {c:4}], :b)