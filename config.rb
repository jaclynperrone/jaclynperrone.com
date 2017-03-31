activate :autoprefixer do |prefix|
  prefix.browsers = "last 2 versions"
end

set :relative_links, true
set :css_dir, "assets/stylesheets"
set :js_dir, "assets/javascripts"
set :images_dir, "assets/images"
set :layout, "layouts/application"

# Per-page layout changes
# With alternative layout
# page '/path/to/file.html', layout: 'other_layout'

configure :development do
  activate :livereload
end

configure :build do
  activate :relative_assets
end
