class Pin < ActiveRecord::Base
	belongs_to :user
	has_attached_file :image, :styles => { :thumb => "100x100>", :medium => "300x300>", :large => "500x500>", :xlarge => "800x800>", :xxlarge => "960x960>", :xxxlarge => "1200x1200>" }
	validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
  validates :description, presence: true
  validates :image, presence: true
end
