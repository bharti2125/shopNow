import React, { useState } from "react";
import {
  User,
  Mail,
  MapPin,
  Phone,
  Edit2,
  Package,
  Heart,
  Star,
  Settings,
} from "lucide-react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Angelina jolie",
    email: "xyz@gmail.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    bio: "Fashion enthusiast and frequent online shopper. Love discovering new brands and sharing reviews to help fellow shoppers make better choices.",
    joinDate: "March 2022",
    totalOrders: 47,
    wishlistItems: 23,
    reviewsGiven: 31,
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg">
                AJ
              </div>
              <button className="absolute -bottom-2 -right-2 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors">
                <Edit2 size={16} />
              </button>
            </div>

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {profile.name}
                  </h1>
                  <p className="text-gray-600 mt-1">
                    Member since {profile.joinDate}
                  </p>
                </div>
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 self-start"
                >
                  <Edit2 size={16} />
                  Edit Profile
                </button>
              </div>

              <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Mail size={16} />
                  {profile.email}
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={16} />
                  {profile.phone}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={16} />
                  {profile.location}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                About
              </h2>
              <p className="text-gray-700 leading-relaxed">{profile.bio}</p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Shopping Activity
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <Package className="mx-auto text-blue-500 mb-2" size={24} />
                  <div className="text-2xl font-bold text-blue-600">
                    {profile.totalOrders}
                  </div>
                  <div className="text-sm text-gray-600">Total Orders</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg">
                  <Heart className="mx-auto text-pink-500 mb-2" size={24} />
                  <div className="text-2xl font-bold text-pink-600">
                    {profile.wishlistItems}
                  </div>
                  <div className="text-sm text-gray-600">Wishlist Items</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <Star className="mx-auto text-yellow-500 mb-2" size={24} />
                  <div className="text-2xl font-bold text-yellow-600">
                    {profile.reviewsGiven}
                  </div>
                  <div className="text-sm text-gray-600">Reviews Given</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-3">
                  <Package size={18} className="text-blue-500" />
                  <span>My Orders</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-3">
                  <Heart size={18} className="text-pink-500" />
                  <span>Wishlist</span>
                </button>
                <button className="w-full text-left px-4 py-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors flex items-center gap-3">
                  <Settings size={18} className="text-gray-500" />
                  <span>Account Settings</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-6 text-white">
              <div className="text-center">
                <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star size={24} />
                </div>
                <h3 className="font-semibold mb-2">Premium Member</h3>
                <p className="text-sm opacity-90">
                  Enjoy exclusive deals and free shipping on all orders!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
