class ModifyDescriptionToPins < ActiveRecord::Migration
  def change
  	remove_column :pins, :description, :string
  	add_column :pins, :description, :text
  end
end
