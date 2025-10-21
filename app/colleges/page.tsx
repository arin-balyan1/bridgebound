'use client';

import { useState, useMemo } from 'react';
// Note: Removed 'next/image' to resolve compilation error in this environment.
// Using the standard `<img>` tag for compatibility.
import { Search, MapPin, GraduationCap, DollarSign, BookOpen, Users, Award, Filter } from 'lucide-react';

// Interface defining the structure for a college object
interface College {
  id: number;
  name: string;
  location: string;
  type: string;
  image: string;
  tuition: string;
  acceptance: string;
  students: string;
  requirements: {
    gpa: string;
    sat: string;
    act: string;
    toefl: string;
    essays: string;
    recommendations: string;
  };
  programs: string[];
}

// Static data for the list of colleges.
// Image paths must be relative to the `public` folder.
const colleges: College[] = [
    {
    id: 1,
    name: "Harvard University",
    location: "Cambridge, MA",
    type: "Private",
    image: "/harvard.webp",
    tuition: "$54,002/year",
    acceptance: "3.4%",
    students: "23,000",
    requirements: { gpa: "4.0", sat: "1460-1580", act: "33-35", toefl: "100+", essays: "Required", recommendations: "3 Letters" },
    programs: ["Business", "Law", "Medicine", "Engineering"]
  },
  {
    id: 2,
    name: "Stanford University",
    location: "Stanford, CA",
    type: "Private",
    image: "/stanford.webp",
    tuition: "$56,169/year",
    acceptance: "3.7%",
    students: "17,000",
    requirements: { gpa: "3.9", sat: "1440-1570", act: "32-35", toefl: "100+", essays: "Required", recommendations: "2-3 Letters" },
    programs: ["Computer Science", "Engineering", "Business", "Medicine"]
  },
  {
    id: 3,
    name: "MIT",
    location: "Cambridge, MA",
    type: "Private",
    image: "/mit.jpg",
    tuition: "$53,790/year",
    acceptance: "4.1%",
    students: "11,500",
    requirements: { gpa: "4.0", sat: "1500-1570", act: "34-36", toefl: "90+", essays: "Required", recommendations: "2 Letters" },
    programs: ["Engineering", "Computer Science", "Physics", "Mathematics"]
  },
  {
    id: 4,
    name: "UC Berkeley",
    location: "Berkeley, CA",
    type: "Public",
    image: "/ucberkley.jpg",
    tuition: "$44,115/year",
    acceptance: "14.5%",
    students: "45,000",
    requirements: { gpa: "3.8", sat: "1330-1530", act: "29-34", toefl: "80+", essays: "Required", recommendations: "Optional" },
    programs: ["Engineering", "Business", "Computer Science", "Environmental Science"]
  },
  {
    id: 5,
    name: "Yale University",
    location: "New Haven, CT",
    type: "Private",
    image: "/yale.jpeg",
    tuition: "$59,950/year",
    acceptance: "4.6%",
    students: "14,500",
    requirements: { gpa: "4.0", sat: "1460-1580", act: "33-35", toefl: "100+", essays: "Required", recommendations: "3 Letters" },
    programs: ["Law", "Medicine", "Arts", "Political Science"]
  },
    {
    id: 6,
    name: "Oxford University",
    location: "Oxford, UK",
    type: "Public",
    image: "/oxford.jpeg",
    tuition: "£9,250/year",
    acceptance: "17.5%",
    students: "24,000",
    requirements: { gpa: "3.9", sat: "Not Required", act: "Not Required", toefl: "100+", essays: "Required", recommendations: "2 Letters" },
    programs: ["Philosophy", "Medicine", "Law", "Literature"]
  },
  {
    id: 7,
    name: "Cambridge University",
    location: "Cambridge, UK",
    type: "Public",
    image: "/cambridge.jpg",
    tuition: "£9,250/year",
    acceptance: "21%",
    students: "19,500",
    requirements: { gpa: "3.9", sat: "Not Required", act: "Not Required", toefl: "110+", essays: "Required", recommendations: "2 Letters" },
    programs: ["Mathematics", "Sciences", "Engineering", "Medicine"]
  },
  {
    id: 8,
    name: "University of Toronto",
    location: "Toronto, Canada",
    type: "Public",
    image: "/toronto.jpeg",
    tuition: "CAD $6,100/year",
    acceptance: "43%",
    students: "95,000",
    requirements: { gpa: "3.6", sat: "1300-1500", act: "28-32", toefl: "89+", essays: "Required", recommendations: "1-2 Letters" },
    programs: ["Business", "Medicine", "Engineering", "Arts"]
  },
  {
    id: 9,
    name: "McGill University",
    location: "Montreal, Canada",
    type: "Public",
    image: "/mcgill.jpg",
    tuition: "CAD $8,000/year",
    acceptance: "46%",
    students: "40,000",
    requirements: { gpa: "3.7", sat: "1400-1520", act: "30-34", toefl: "86+", essays: "Optional", recommendations: "Optional" },
    programs: ["Medicine", "Law", "Engineering", "Sciences"]
  },
  {
    id: 10,
    name: "University of Melbourne",
    location: "Melbourne, Australia",
    type: "Public",
    image: "/melbourne.jpeg",
    tuition: "AUD $44,000/year",
    acceptance: "70%",
    students: "52,000",
    requirements: { gpa: "3.5", sat: "Not Required", act: "Not Required", toefl: "79+", essays: "Required", recommendations: "1 Letter" },
    programs: ["Business", "Law", "Medicine", "Architecture"]
  },
  {
    id: 11,
    name: "National University of Singapore",
    location: "Singapore",
    type: "Public",
    image: "/singapore.jpeg",
    tuition: "SGD $38,000/year",
    acceptance: "5%",
    students: "40,000",
    requirements: { gpa: "3.9", sat: "1450-1550", act: "33-35", toefl: "92+", essays: "Required", recommendations: "2 Letters" },
    programs: ["Computer Science", "Business", "Engineering", "Medicine"]
  },
  {
    id: 12,
    name: "ETH Zurich",
    location: "Zurich, Switzerland",
    type: "Public",
    image: "/zurich.jpeg",
    tuition: "CHF 1,460/year",
    acceptance: "27%",
    students: "24,500",
    requirements: { gpa: "3.8", sat: "1400-1500", act: "Not Required", toefl: "100+", essays: "Required", recommendations: "2 Letters" },
    programs: ["Engineering", "Computer Science", "Physics", "Architecture"]
  },
  {
    id: 13,
    name: "University of Tokyo",
    location: "Tokyo, Japan",
    type: "Public",
    image: "/tokyo.webp",
    tuition: "¥535,800/year",
    acceptance: "34%",
    students: "28,000",
    requirements: { gpa: "3.7", sat: "Not Required", act: "Not Required", toefl: "85+", essays: "Required", recommendations: "2 Letters" },
    programs: ["Engineering", "Sciences", "Medicine", "Law"]
  },
  {
    id: 14,
    name: "Technical University of Munich",
    location: "Munich, Germany",
    type: "Public",
    image: "/munich.jpeg",
    tuition: "€129/semester",
    acceptance: "8%",
    students: "48,000",
    requirements: { gpa: "3.7", sat: "Not Required", act: "Not Required", toefl: "88+", essays: "Required", recommendations: "1-2 Letters" },
    programs: ["Engineering", "Computer Science", "Natural Sciences", "Medicine"]
  },
  {
    id: 15,
    name: "Sorbonne University",
    location: "Paris, France",
    type: "Public",
    image: "/sorbonne.jpeg",
    tuition: "€170/year",
    acceptance: "13%",
    students: "55,000",
    requirements: { gpa: "3.5", sat: "Not Required", act: "Not Required", toefl: "80+", essays: "Required", recommendations: "2 Letters" },
    programs: ["Arts", "Humanities", "Sciences", "Medicine"]
  },
  {
    id: 16,
    name: "University of Amsterdam",
    location: "Amsterdam, Netherlands",
    type: "Public",
    image: "/amsterdam.jpeg",
    tuition: "€2,209/year",
    acceptance: "4%",
    students: "42,000",
    requirements: { gpa: "3.6", sat: "Not Required", act: "Not Required", toefl: "92+", essays: "Required", recommendations: "1 Letter" },
    programs: ["Business", "Social Sciences", "Law", "Medicine"]
  },
  {
    id: 17,
    name: "Tsinghua University",
    location: "Beijing, China",
    type: "Public",
    image: "/Tsinghua.jpeg",
    tuition: "¥30,000/year",
    acceptance: "2%",
    students: "53,000",
    requirements: { gpa: "3.9", sat: "Not Required", act: "Not Required", toefl: "95+", essays: "Required", recommendations: "2 Letters" },
    programs: ["Engineering", "Computer Science", "Business", "Architecture"]
  }
];


// Main component for the college finder page
export default function CollegesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [expandedCollege, setExpandedCollege] = useState<number | null>(null);

  // Memoized function to filter and sort colleges based on user input
  const filteredColleges = useMemo(() => {
    let filtered = colleges;

    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      filtered = filtered.filter(college =>
        college.name.toLowerCase().includes(lowercasedTerm) ||
        college.location.toLowerCase().includes(lowercasedTerm) ||
        college.programs.some(program => program.toLowerCase().includes(lowercasedTerm))
      );
    }

    if (selectedType !== 'all') {
      filtered = filtered.filter(college => college.type === selectedType);
    }

    if (selectedLocation !== 'all') {
      const locationMap: { [key: string]: string[] } = {
        'USA': ['MA', 'CA', 'CT', 'MI'], 'UK': ['UK'], 'Canada': ['Canada'], 'Australia': ['Australia'], 'Singapore': ['Singapore'],
        'Switzerland': ['Switzerland'], 'Japan': ['Japan'], 'Germany': ['Germany'], 'France': ['France'],
        'Netherlands': ['Netherlands'], 'China': ['China'], 'India': ['India']
      };
      const locations = locationMap[selectedLocation];
      if(locations) {
        filtered = filtered.filter(college => locations.some(loc => college.location.includes(loc)));
      }
    }

    // Sorting logic
    const sorted = [...filtered].sort((a, b) => {
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      if (sortBy === 'acceptance') return parseFloat(a.acceptance) - parseFloat(b.acceptance);
      if (sortBy === 'tuition') {
          const tuitionA = parseInt(a.tuition.replace(/[^0-9]/g, ''), 10);
          const tuitionB = parseInt(b.tuition.replace(/[^0-9]/g, ''), 10);
          return tuitionA - tuitionB;
      }
      return 0;
    });

    return sorted;
  }, [searchTerm, selectedType, selectedLocation, sortBy]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white font-sans">
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Bridgebound Academy Logo"
              width="56"
              height="56"
              className="object-cover w-12 h-12 sm:w-14 sm:h-14 rounded-lg"
            />
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-gray-900">Bridgebound</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Academy</p>
            </div>
          </div>
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full text-sm sm:text-base font-medium transition-all hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
            Contact Us
          </button>
        </div>
      </header>

      <main>
        <section className="bg-gradient-to-r from-orange-100 to-yellow-50 py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Discover Your Perfect College
            </h2>
            <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
              Explore top universities and their admission requirements to find the best fit for your academic journey.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 -mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by college, location, or program..."
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:outline-none focus:border-orange-400 transition-colors text-gray-900 font-semibold placeholder:font-normal placeholder:text-gray-400"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="college-type" className="block text-sm font-medium text-gray-700 mb-2">
                  <Filter className="inline w-4 h-4 mr-1" />
                  College Type
                </label>
                <select
                  id="college-type"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 text-gray-900 font-semibold"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="all">All Types</option>
                  <option value="Private">Private</option>
                  <option value="Public">Public</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Location
                </label>
                <select
                  id="location"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 text-gray-900 font-semibold"
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                >
                  <option value="all">All Locations</option>
                  <option value="USA">USA</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Japan">Japan</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="China">China</option>
                  <option value="India">India</option>
                </select>
              </div>

              <div>
                <label htmlFor="sort-by" className="block text-sm font-medium text-gray-700 mb-2">
                  <Award className="inline w-4 h-4 mr-1" />
                  Sort By
                </label>
                <select
                  id="sort-by"
                  className="w-full px-4 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-orange-400 text-gray-900 font-semibold"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Name (A-Z)</option>
                  <option value="acceptance">Acceptance Rate (Lowest)</option>
                  <option value="tuition">Tuition (Lowest)</option>
                </select>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredColleges.length} of {colleges.length} colleges
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            {filteredColleges.length > 0 ? (
                filteredColleges.map((college, index) => (
                <div key={college.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={college.image}
                      alt={`Campus of ${college.name}`}
                      width="400"
                      height="250"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      loading={index < 4 ? 'eager' : 'lazy'} // Prioritize loading for the first few images
                    />
                    <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {college.type}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{college.name}</h3>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1.5" />
                      <span className="text-sm">{college.location}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <DollarSign className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                        <div className="text-xs text-gray-600">Tuition</div>
                        <div className="text-sm font-semibold text-gray-900">{college.tuition}</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <Award className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                        <div className="text-xs text-gray-600">Acceptance</div>
                        <div className="text-sm font-semibold text-gray-900">{college.acceptance}</div>
                      </div>
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <Users className="w-5 h-5 text-green-500 mx-auto mb-1" />
                        <div className="text-xs text-gray-600">Students</div>
                        <div className="text-sm font-semibold text-gray-900">{college.students}</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center mb-2">
                        <BookOpen className="w-4 h-4 text-orange-500 mr-2" />
                        <h4 className="text-sm font-semibold text-gray-700">Popular Programs</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {college.programs.map((program) => (
                          <span key={program} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs hover:bg-gray-200 transition-colors">
                            {program}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => setExpandedCollege(expandedCollege === college.id ? null : college.id)}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-all hover:shadow-lg flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                      <GraduationCap className="w-5 h-5 mr-2" />
                      {expandedCollege === college.id ? 'Hide' : 'View'} Admission Requirements
                    </button>

                    {expandedCollege === college.id && (
                      <div className="mt-4 p-4 bg-gradient-to-br from-orange-50 to-yellow-50 rounded-lg border-2 border-orange-200">
                        <h4 className="font-bold text-gray-900 mb-3 flex items-center">
                          <Award className="w-5 h-5 mr-2 text-orange-500" />
                          Minimum Requirements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div className="bg-white p-3 rounded-lg border border-orange-100"><span className="font-semibold text-gray-700">GPA:</span><span className="ml-2 text-gray-900">{college.requirements.gpa}</span></div>
                          <div className="bg-white p-3 rounded-lg border border-orange-100"><span className="font-semibold text-gray-700">SAT:</span><span className="ml-2 text-gray-900">{college.requirements.sat}</span></div>
                          <div className="bg-white p-3 rounded-lg border border-orange-100"><span className="font-semibold text-gray-700">ACT:</span><span className="ml-2 text-gray-900">{college.requirements.act}</span></div>
                          <div className="bg-white p-3 rounded-lg border border-orange-100"><span className="font-semibold text-gray-700">TOEFL:</span><span className="ml-2 text-gray-900">{college.requirements.toefl}</span></div>
                          <div className="bg-white p-3 rounded-lg border border-orange-100 md:col-span-2"><span className="font-semibold text-gray-700">Essays:</span><span className="ml-2 text-gray-900">{college.requirements.essays}</span></div>
                          <div className="bg-white p-3 rounded-lg border border-orange-100 md:col-span-2"><span className="font-semibold text-gray-700">Recommendations:</span><span className="ml-2 text-gray-900">{college.requirements.recommendations}</span></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-12 col-span-1 lg:col-span-2">
                <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No colleges found</h3>
                <p className="text-gray-600">Try adjusting your search or filters.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold">Bridgebound Academy</span>
          </div>
          <p className="text-gray-400 mb-4">Empowering your global education journey.</p>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Bridgebound Academy. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

