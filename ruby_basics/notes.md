When you guys are done installing GPG2

<!-- MACOS -->

Run the command `gpg2 --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB`

<!-- sometimes brew does not link packages correctly... we'll need to fix this sometime -->

<!-- temp fix -->

use `/usr/local/bin/gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB`


RVM
Ruby Version Manager

use `rvm install <version>` to install a new version of ruby
use `rvm use <version>` to switch between different ruby versions
to set a default ruby version use the --default flag with the `use` command: `rvm use --default <version>`

