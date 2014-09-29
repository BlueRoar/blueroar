class AddArtistAndGenreToSongs < ActiveRecord::Migration
  def change
    add_column :songs, :artist, :string
    add_column :songs, :genre, :string, default: "Unknown"
  end
end
