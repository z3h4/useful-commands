# Model

```Ruby
class Song < ApplicationRecord
  extend SongFinders
  include SongConverter

  # == Constants ============================================================
  TAX_RATE = 25
  GENDERS = [['Male', 'm'], ['Female', 'F']].freeze

  # == Attributes ===========================================================
  attr_accessible :username, ...
  attr_protected :...
  attr_accessor :...
  store :preferences, accessors: [ :dont_send_email ]

  # == Extensions/Gems ===========================================================
  acts_as_paranoid

  has_attached_file :avatar, styles: {
    square_100: '100x100#'
    square_300: '300x300#'
  }

  # == Relationships ========================================================
  belongs_to :album
  belongs_to :artist

  has_one :text
  has_many :downloads

  # == Validations ==========================================================
  validates :email, presence: true
  validates :artist_id, presence: true
  validates :publisher_id, presence: true

  # == Scopes ===============================================================
  scope :published, ->            { where(published: true) }
  scope :by_artist, ->(artist_id) { where(artist_id: artist_id) }
  scope :sorted_by_title,         { order(:title) }
  scope :sorted_by_release_date,  { order(:release_date) }

  # == Callbacks ============================================================
  after_update :alert_artist_followers
  after_update :alert_publisher

  # == Class Methods ========================================================

  # == Instance Methods =====================================================
```
