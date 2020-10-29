# SAITC App Installation for developers


**Setup**
We run `$ bin/setup`. In case of getting an error "Permission denied", we run `$ chmod +x ./bin/setup` and try again.

****

**Change Ruby version**
By installing RVM we are able to change between ruby versions by running: `$ rvm use ruby-2.6.0`
In case of getting the error "RVM is not a function, selecting rubies with 'rvm use ...' will not work.", we run `$ bash --login`, and try running the command again.

****

**Running server**
`$ rails server` o `$ rails s`

****

**Common mistakes**
*could not connect to server: Connection refused. Is the server running on host "localhost" (127.0.0.1) and accepting TCP/IP connections on port 5432?*
This generally happens when the postgresql service is not running. To solve start the postgresql service by running `$ sudo service postgresql start` and try again.

****

**Make yourself admin**
If you already logged in with an ITESM account then there's a user with your student ID as its primary key. You can access the rails console to make yourself admin and test the admin functions.
```
$ rails c
:001 > s = Student.find("<your ITESM ID>")
:002 > s.admin = true
:003 > s.save!
:004 >
```

An example of this:
```
$ rails c
:001 > s = Student.find("A01634310")
:002 > s.admin = true
:003 > s.save!
:004 >
```
You can close the rails console with `ctrl+D`.

***


## Installing SATIC on MAC OS X
First, go to the folder you would like to have the application in. As the code is hosted on [Github](https://github.com/saitcmty/CasasTI) you can clone the files with: `$ git clone https://github.com/saitcmty/CasasTI.git`

Mac OS X already ships with ruby 2.0.0, but we'll need to install a newer version.

### Installing RVM and ruby-2.6.0
Then we'll get RVM in order to easily change between ruby versions.
```
$ gpg --keyserver hkp://pool.sks-keyservers.net --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
$ curl -sSL https://get.rvm.io | bash -s stable --ruby
```
<br></br>

Now we'll install the proper ruby version. (Our current version used on the app is ruby-2.6.0)
```
$ rvm install "ruby-2.6.0"
$ rvm use ruby-2.6.0
```

> If the `rvm` command is not recognized we'll need to modify our ~/.bash_profile file. We open it with Visual Studio Code: `$ code ~/.bash_profile` and add the following line: `source ~/.rvm/scripts/rvm`, at the bottom of the file.

Now we are running the correct ruby version!!
<br>

### Getting Homebrew and Gnupg to handle installations
We will first get Homebrew to help us performing many of our installs.
> If prompted for a password, it will be the one of your computer. You are downloading a program and are therefore asked for your permission.

`$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`

Then, we'll get gnupg and gnupg2 in order to install the rest necessary.
`$ brew install gnupg gnupg2`

<br>

### Installing PostgreSQL
We'll install and then start postgresql, a service necessary for 
`$ brew install postgresql`

Now we'll start postgresql: `$ brew services start postgresql`
<br>

### Setting up the app and running
Now we are ready to set up the app!!
Run: `$ bin/setup`

You'll probably see some red lines, don't worry, leave the program running until it installs everything necessary.

When done, you can start the application server with `$ rails server`. If you are redirected to the login screen, it's working!! Well done!!
<br>



## Installing SAITC on Windows 10 / Linux

Following the instructions found on [Windows Subsystem for Linux Installation Guide for Windows 10](https://docs.microsoft.com/es-mx/windows/wsl/install-win10?redirectedfrom=MSDN), we'll install the Windows Subsystem for Linux, a Linux environment to facilitate the development for the app even on a Windows OS.

<br>

### Install the Windows Subsystem for Linux
Before installing any Linux distros for WSL, you must ensure that the "Windows Subsystem for Linux" optional feature is enabled:
1.  Open PowerShell **as Administrator** and run:
`Enable-WindowsOptionalFeature -Online -FeatureName  Microsoft-Windows-Subsystem-Linux`
2. Restart your computer when prompted.

<br>

### Install Linux Ubuntu 18.04 Distribution from the Microsoft Store
You can get it from [Microsoft Store - Ubuntu 18.04 LTS](https://www.microsoft.com/es-mx/p/ubuntu-1804-lts/9n9tngvndl3q?rtc=1&activetab=pivot:overviewtab).
Once you run it you'll set up your UNIX username and password.

You can read how WSL (Windows Subsystem for Linux) works on [The official documentation](https://docs.microsoft.com/en-us/windows/wsl), a quick summary is that this tool helps us develop using Linux commands which will ease commands used across all operating systems in this documentation guide. This also brings other benefits as git and other UNIX' only programs being able to be run now.

Some quick things to notice about the file system are:
1. Your Linux environment file system is "above" the Windows one. **You can access the Windows files within WSL on the `/mnt/c` direction.**
2. Nowadays windows apps can also access the Linux root directories. You can open it in the Windows explorer with apps like explorer.exe. (From the `/` directory, try running `explorer.exe .`).

<br>

### Installing Visual Studio Code
While any IDE can be used to develop for this app, we heavily recommend using VSCode as a standard due to its capabilities of connecting with WSL and running commands on the spot. We'll also use this IDE through the rest of the installation guide.
You can install Visual Studio Code from [here](https://code.visualstudio.com/Download). 

**Getting the Linux bash inside Visual Studio Code as preferred terminal**
We can open the terminal within VS Code by typing `ctrl+ñ` on latin-american keyboards or going to Terminal > New Terminal on the toolbar. However, we'll see this terminal is set to cmd or powershell. We can set our default shell by typing on the corner shell selector and selecting our default shell to wsl (which will be probably located on `C:\WINDOWS\System32\wsl.exe`. This helps us to open our files first and then running the WSL commands easily, saving lookup time inside the Ubuntu app. In fact, once we get this running we won't need to run the Ubuntu 18.04 LTS for any other commands, as these will be run inside VS Code itself.
> An alternative to this is going to File > Preferences > Settings and open the settings as JSON (document with arrow button on the corner), in there we insert the line `"terminal.integrated.shell.windows": "C:\\WINDOWS\\System32\\wsl.exe"` to set the default shell used by VS Code to the wsl bash.

<br>

**Remote WSL - Install (Recommended)**
The **Remote - WSL extension** extension lets you use the Windows Subsystem for Linux (WSL) as a full-time development environment right from VS Code. WSL will be probably detected and prompted for the **Remote - WSL** install. If not, you can still access installation by heading to Extensions and looking for it manually. In either case, install it and relaunch VS Code to access the Linux functionallities within it.
Proper to Linux, many apps can be used to open files and directories. Once Remote - WSL is installed, Visual Studio Code can be invoked with the `code` command to open files and directories. (An example of this, `code /home/user/` would open this folder on Visual Studio Code).
<br>

### Configure Github and cloning the repository

From the command line we can get and configure git.
```
$ sudo apt update
$ sudo apt install git
$ git config --global user.name “<your_github_user_name>”
$ git config --global user.email “<your_github_email>”
```



Now we can go to the folder we want and clone the repository. As the code is hosted on [Github](https://github.com/saitcmty/CasasTI) you we clone the files with:
`$ git clone https://github.com/saitcmty/CasasTI.git`

<br>

### Install NodeJs
NodeJS will be necessary in order to run some of the scripts while in development and running JavaScript in general. This we install it by running:
`$ sudo apt-get install nodejs`
<br>

### Installing RVM and ruby-2.6.0
While we will be working specifically with **Ruby 2.6.0**, it is useful to be able to switch across ruby versions in case of being necessary. Thus, we'll get Ruby Version Manager in order to acheive this.
```
$ sudo apt-get install software-properties-common
$ sudo apt-add-repository -y ppa:rael-gc/rvm
$ sudo apt-get update
$ sudo apt-get install rvm
```
After the installation is completed we restart our computer.

Sometimes rvm is not properly setup as a valid command in out PATH variables. To add it we run:
```
$ echo '[[ -s "$HOME/.rvm/scripts/rvm" ]] && . "$HOME/.rvm/scripts/rvm" # Load RVM function' >> ~/.bashrc
$ source ~/.bashrc
$ rvm get stable --auto-dotfiles
```

Now we'll be able to install the proper ruby version with: 
```
$ rvm install 2.6.0
$ rvm use 2.6.0
```
We can check if ruby was installed properly with: `$ ruby -v`
Sometimes it is also useful to install railties to get the command rails without any problems. You can get it with `$ sudo apt install ruby-railties`.

> (You'll need dpkg to do this, if you get an error "*E: dpkg was interrupted, you must manually run 'sudo dpkg --configure -a' to correct the problem.*", run `$ sudo dpkg --configure -a` and try again).


<br>

### Install Postgresql
We get postgresql with the following commands:
```
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo apt-get install libpq-dev
```

In some cases we'll need to add `host: localhost` to our config/Database.yml file inside our repository in the default section. (After `line 19` is a good place). 

In order to set the password trust for our users we enter our *pg_hba.conf* file usually located in  */etc/postgresql/10/main/pg_hba.conf* with `$ sudo nano /etc/postgresql/10/main/pg_hba.conf` in order to get the necessary privileges, we change our authentication methods from "md5" to "trust" in all instances.

Now we enter the postgresql service, we run `$ sudo service postgresql start`.

We'll then need to restart the cluster by entering the postgresql program and restarting it.
```
$ sudo -i -u postgres
$ psql
# select pg_reload_conf();
```

To exit out of this bash we type `Ctrl+D` two (2) times.

We'll also need to create a role with admin privileges by entering to the postgres command line and running the proper command:
```
$ sudo -i -u postgres
$ createuser --interactive
```
When prompted for the name of the user we type or UNIX username and for the role to be a superuser we'll say yes (y).
> It is important to remember that everytime we start WSL we'll need to run the Postgresql service with: `$ sudo service postgresql start`

<br>

### Setting up the app and running
Now we are ready to set up the app!!
Run: `$ bin/setup`

You'll probably see some red lines, don't worry, leave the program running until it installs everything necessary.

When done, you can start the application server with `$ rails server`. If you are redirected to the login screen, it's working!! Well done!!
