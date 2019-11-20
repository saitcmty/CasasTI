<img src="https://scontent.fntr3-1.fna.fbcdn.net/v/t31.0-8/10575427_694006604023207_5549527503211987777_o.jpg?_nc_cat=109&_nc_oc=AQnkm4dfC7IIWRZMbwEI92RLEDeD4TchoONCYokIvwt26bafM1U5g5rsbDjsVPx2iLY&_nc_ht=scontent.fntr3-1.fna&oh=476cc274e9b610790d6e08c84b75fca7&oe=5E0DA93D" width="400" height="400">

# Applicacion para las Casas de ITC

### All Changes must be made through a pull request.

## Installing SATIC on MAC OS X
First, go to the folder you would like to have the application in.

After that, clone the files with:
`$ git clone https://github.com/saitcmty/CasasTI.git`

Mac OS X already ships with ruby 2.0.0, therefore we need to install a newer version.

We will first get Homebrew to perform all of our installs. We run:
`$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
When asked for a password, it will be the one of your computer. You are downloading a program and are asked for your permission.

Then, we'll install gnupg in order to install the rest necessary.
`$ brew install gnupg gnupg2`

Then we'll get RVM in order to easily change between ruby versions.
`$ gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB`
`$ curl -sSL https://get.rvm.io | bash -s stable --ruby`

Now we'll install the correct version of ruby.

Sometimes we need to modify our ~/.bash_profile file, we'll open it with Visual Studio Code typing:
`$ code ~/.bash_profile`
We'll add the following line at the bottom of the file: `source ~/.rvm/scripts/rvm`

Close and open again the terminal in order for rvm to be recognized as a command. Don't forget to return to the folder of the repository!!
Now we'll install the proper ruby version. (Our current version is ruby-2.6.0)
`$ rvm install "ruby-2.6.0"`
`$ rvm use ruby-2.6.0`

Now we are running the correct ruby version!!


**Installing PostgreSQL**
`$ brew install postgresql`

Now we'll start postgresql: `$ brew services start postgresql`

Now we are ready to setup the app!!
Run: `$ bin/setup`

You'll probably see some red lines, don't worry, leave the program running until it installs everything necessary.

When done, you can start the application server with `$ rails server`



## Useful commands

- Check if Ruby is installed
```bash
foo@bar:~$ ruby -v
```
- Install all dependencies
```bash
foo@bar:~$ gem install
```
- Launch Server 
```bash
foo@bar:~$ rails server
``` 
