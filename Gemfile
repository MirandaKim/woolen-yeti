source "https://rubygems.org"

# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
gem "jekyll", "~> 3.8.3"

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "~> 2.0"

# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins

# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.6"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.0" if Gem.win_platform?

# autoprefixer
gem 'jekyll-autoprefixer'

# babel
gem 'jekyll-babel'

###################
# Jekyll Compose #
#################
# Generate files with commands
# draft       Creates a new draft post with the given NAME
# post        Creates a new post with the given NAME
# publish     Moves a draft into the _posts directory and sets the date
# unpublish   Moves a post back into the _drafts directory
# page        Creates a new page with the given NAME
##############
# Customize #
############
# See jekyll_compose section of ~/_config.yml
##################
# Use Examples: #
################
# Create draft:
#   $ bundle exec jekyll draft "My new draft"
# Publish draft:
#   $ bundle exec jekyll publish _drafts/my-new-draft.md
#   or specify a specific date on which to publish it
#   $ bundle exec jekyll publish _drafts/my-new-draft.md --date 2014-01-24
# Unpublish post:
#   $ bundle exec jekyll unpublish _posts/2014-01-24-my-new-draft.md
gem 'jekyll-compose', group: [:jekyll_plugins]
