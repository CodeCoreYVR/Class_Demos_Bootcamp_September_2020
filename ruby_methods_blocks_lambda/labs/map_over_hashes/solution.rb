def map_over_hashes(hash)
  new_arr = {}

  for key, value in hash
    new_arr << yield(key, value)
  end

  new_arr
end

