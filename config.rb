activate :directory_indexes
activate :sprockets

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
  activate :livereload do |reload|
    reload.no_swf = true
  end
end

configure :build do
  activate :relative_assets
end

helpers do
  def nav_active(path)
    current_page.path == path ? "active" : ""
  end
end
