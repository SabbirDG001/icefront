// Conference Website JavaScript

// DOM Elements will be queried after DOM is loaded

// Sample speakers data
const speakers = [
    {
        name: "Prof Dr Rafiqul Islam",
        title: "Charles Sturt University, NSW, Australia",
        bio: "",
        image: "public/rafiqul.jpeg"
    },
    {
        name: "Prof Dr Haeng Muk Cho",
        title: "Kongju National University, South Korea",
        bio: "",
        image: "public/haeng.jpeg"
    },
    {
        name: "Prof Dr Apel Mahmud",
        title: "Flinders University, Australia",
        bio: "",
        image: "public/apel.jpeg"
    },
    {
        name: "Dr Apurba Das",
        title: "Indian Institute of Technology Delhi, India",
        bio: "",
        image: "public/apurba.jpeg"
    },
    {
        name: "Dr Adnan Anwar",
        title: "Deakin University, Australia",
        bio: "",
        image: "public/adnan.jpeg"
    },
    {
        name: "Dr Emran Amin",
        title: "Australian Communications and Media Authority (ACMA), Melbourne,  Australia",
        bio: "",
        image: "public/emran.jpeg"
    },
    {
        name: "Dr Md Shohel Rana",
        title: "Georgia Southern University, USA",
        bio: "",
        image: "fas fa-user-md"
    },
    {
        name: "Mr Mohammad Zaman",
        title: "Washington University of Sci and Tech, USA",
        bio: "",
        image: "public/zaman.jpeg"
    },
    {
        name: "Mr Kazi Sadlil Rhythm",
        title: "Senior Software Engineer, Google Inc.",
        bio: "",
        image: "public/sadlil.jpeg"
    },
    {
        name: "Dr Shah Newaz Ali",
        title: "Queensland University of Technology",
        bio: "",
        image: "fas fa-user-graduate"
    },
    {
        name: "Dr Fei Zhu",
        title: "Wuhan Textile University, China",
        bio: "",
        image: "fas fa-user-md"
    }
];

// Advisory Committee data
const advisoryCommittee = [
    {
        name: "Prof Dr Mohammed Atiquzzaman",
        affiliation: "The University of Oklahoma, USA",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Prof Xun Yi",
        affiliation: "RMIT University, Melbourne, Australia",
        icon: "fas fa-user-tie"
    },
    {
        name: "Mohammad Ataul Karim",
        affiliation: "University of Massachusetts Dartmouth, USA",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Prof Dr Haeng Muk Cho",
        affiliation: "Kongju National University, South Korea",
        icon: "public/haeng.jpeg"
    },
    {
        name: "Prof Azharul Karim",
        affiliation: "Queensland University of Technology, Australia",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Prof Dr Ibrahim Khalil",
        affiliation: "RMIT University, Melbourne, Australia",
        icon: "fas fa-user-md"
    },
    {
        name: "Prof Dr Asaduzzaman Khan",
        affiliation: "The University of Queensland, Australia",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr Jahangir Hossian",
        affiliation: "University of Technology Sydney, Australia",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Prof Dr Rafiqul Islam",
        affiliation: "Charles Sturt University, NSW, Australia",
        icon: "public/rafiqul.jpeg"
    },
    {
        name: "Prof Dr Apel Mahmud",
        affiliation: "Flinders University, Australia",
        icon: "public/apel.jpeg"
    },
    {
        name: "Dr Apurba Das",
        affiliation: "Indian Institute of Technology Delhi, India",
        icon: "public/apurba.jpeg"
    },
    {
        name: "Dr Syed M Shamsul Islam",
        affiliation: "Edith Cowan University, Australia",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr Adnan Anwar",
        affiliation: "Deakin University, Australia",
        icon: "public/adnan.jpeg"
    }
];

// Organizing Committee data
const organizingCommittee = [
    {
        name: "Prof Dr Anwarul Azim Akhand",
        role: "Chief Patron",
        affiliation: "Honorable Vice-Chancellor, MBSTU",
        icon: "fas fa-user-tie"
    },
    {
        name: "Prof. Dr Mohammad Motiur Rahman",
        role: "General Chair",
        affiliation: "Dean, Faculty of Engineering, MBSTU",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Prof Dr Monir Morshed",
        role: "Co-chair",
        affiliation: "Chairman, Dept of ICT, MBSTU",
        icon: "fas fa-user-cog"
    },
    {
        name: "Prof Dr. Md. Abdullah Al Mamun",
        role: "Co-chair",
        affiliation: "Chairman, Dept of TE, MBSTU",
        icon: "fas fa-user-md"
    },
    {
        name: "Prof Dr Mohammad Shahin Uddin",
        role: "Co-chair",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Prof Abu Baqar Siddique",
        role: "Co-chair",
        affiliation: "Dept of TE, MBSTU",
        icon: "fas fa-user-tie"
    },
    {
        name: "Prof Dr Nargis Akter",
        role: "Co-chair",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-cog"
    },
    {
        name: "Prof Dr Iqbal Mahmud",
        role: "Secretary",
        affiliation: "Chairman, Dept of ME, MBSTU",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr Mehedi Hasan Talukder",
        role: "Treasurer",
        affiliation: "Professor, Dept of CSE, MBSTU",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Prof Dr Mahbubul Bashar",
        role: "Joint Secretary",
        affiliation: "Dept of TE",
        icon: "fas fa-user-tie"
    },
    {
        name: "Prof Dr. Md. Sazzad Hossain",
        role: "Joint Secretary",
        affiliation: "MBSTU",
        icon: "fas fa-user-cog"
    },
    {
        name: "Professor Dr Mahbubul Bashar",
        role: "Sponsor Chair",
        affiliation: "Dept of TE, MBSTU",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Prof Dr Ahsan Habib",
        role: "Sponsor Co-Chair",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-tie"
    },
    {
        name: "Prof Dr Fazlul Karim",
        role: "Sponsor Co-Chair",
        affiliation: "Dept of BGE",
        icon: "fas fa-user-md"
    },
    {
        name: "Mr ASM Delowar Hossain",
        role: "Sponsor Secretary",
        affiliation: "Dept of CSE",
        icon: "fas fa-user-cog"
    },
    {
        name: "Mr Mahfuz Reza",
        role: "Sponsor Joint Secretary",
        affiliation: "Dept of CSE, MBSTU",
        icon: "fas fa-user-graduate"
    }
];

// Technical Program Committee data
const technicalProgramCommittee = [
    {
        name: "Professor Mostafa Kamal Nasir",
        role: "Chair",
        affiliation: "Dept of CSE, MBSTU",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr Sajjad Waheed",
        role: "Co-chair",
        affiliation: "Professor, Dept of ICT",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr Mehedi Hasan Talukder",
        role: "Co-chair",
        affiliation: "Professor, Dept of CSE, MBSTU",
        icon: "fas fa-user-md"
    },
    {
        name: "Prof Dr Ziaur Rahman",
        role: "Secretary",
        affiliation: "Dept of ICT",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr Rafiqul Islam",
        role: "Member",
        affiliation: "Charles Sturt University",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr Jahangir Hossian",
        role: "Member",
        affiliation: "University of Technology Sydney, Australia",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr Apel Mahmud",
        role: "Member",
        affiliation: "Victoria University, Melbourne, Australia",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr Syed M. Shamsul Islam",
        role: "Member",
        affiliation: "Edith Cowan University",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr Adnan Anwar",
        role: "Member",
        affiliation: "Deakin University, Australia",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr Fida Hasan",
        role: "Member",
        affiliation: "University of New South Wales, Australia",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr Abul Bashar",
        role: "Member",
        affiliation: "Queensland University of Technology",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr Shah Newaz Ali",
        role: "Member",
        affiliation: "Queensland University of Technology",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Xiaoning (Maggie) Liu",
        role: "Member",
        affiliation: "RMIT University, Australia",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Mohammad Saidur Rahman",
        role: "Member",
        affiliation: "RMIT University",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr Terry Yang",
        role: "Member",
        affiliation: "Victoria University, Australia",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Chao Lin",
        role: "Member",
        affiliation: "Fujian Normal University, China",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr Xu Yang",
        role: "Member",
        affiliation: "Fujian Normal University, China",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr Fei Zhu",
        role: "Member",
        affiliation: "Wuhan Textile University, China",
        icon: "fas fa-user-tie"
    },
    {
        name: "Prof Dr Rifat Shahriyar",
        role: "Member",
        affiliation: "Dept of CSE, BUET",
        icon: "fas fa-user-md"
    },
    {
        name: "Prof Dr Kamrul Hasan",
        role: "Member",
        affiliation: "Dept of CSE, IUT, OIC",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr Mohammad Zahidur Rahman",
        role: "Member",
        affiliation: "Dept of CSE, JU",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Prof Dr Joykrisna Saha",
        role: "Member",
        affiliation: "Dept of Textile, MBSTU",
        icon: "fas fa-user-tie"
    },
    {
        name: "Prof Dr Badrul Alam Miah",
        role: "Member",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-md"
    },
    {
        name: "Prof Dr Mahbuba Begum",
        role: "Member",
        affiliation: "Dept of CSE, MBSTU",
        icon: "fas fa-user-cog"
    },
    {
        name: "Prof Dr Md Abir Hossain",
        role: "Member",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr Nazrul Islam",
        role: "Member",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr Ali Newaz Bahar",
        role: "Member",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr Kawsar Ahmed",
        role: "Member",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Mohammad Shorif Uddin",
        role: "Member",
        affiliation: "Jahangirnagar University, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Masanori Hanawa",
        role: "Member",
        affiliation: "University of Yamanashi, Japan",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. M. Shamim Kaiser",
        role: "Member",
        affiliation: "Jahangirnagar University, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Mufti Mahmud",
        role: "Member",
        affiliation: "Nottingham Trent University, UK",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Kapil Sharma",
        role: "Member",
        affiliation: "South Asian University New Delhi",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Madeena Sultana",
        role: "Member",
        affiliation: "University of Calgary, Canada",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Abdulla Al Mamun",
        role: "Member",
        affiliation: "Hajee Mohammad Danesh Science & Technology University",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Sipon Miah",
        role: "Member",
        affiliation: "Islamic University Bangladesh",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Md. Abdur Razzaque",
        role: "Member",
        affiliation: "Dhaka University, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Moshiul Hoque",
        role: "Member",
        affiliation: "CUET, Bangladesh",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Sifat Momen",
        role: "Member",
        affiliation: "North South University, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Nabeel Mahmud",
        role: "Member",
        affiliation: "North South University, Bangladesh",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Hasan Uz Zaman",
        role: "Member",
        affiliation: "North South University, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Tama Fouzder",
        role: "Member",
        affiliation: "University of Liberal Arts Bangladesh",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. A K M Muzahidul Islam",
        role: "Member",
        affiliation: "United International University, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Abul Kalam Al Azad",
        role: "Member",
        affiliation: "University of Liberal Arts Bangladesh, Bangladesh",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Farhana Sarker",
        role: "Member",
        affiliation: "University of Liberal Arts Bangladesh, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Mohammad Hanif Ali",
        role: "Member",
        affiliation: "Jahangirnagar University, Bangladesh",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Al-Amin Bhuiyan",
        role: "Member",
        affiliation: "King Faisal University, KSA",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Md. Nurunnabi Mollah",
        role: "Member",
        affiliation: "KUET, Bangladesh",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Md. Rafiqul Islam",
        role: "Member",
        affiliation: "KUET, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. A. G. Bhuiyan",
        role: "Member",
        affiliation: "KUET, Bangladesh",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Abdur Rafiq",
        role: "Member",
        affiliation: "KUET, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Md. Shahjahan",
        role: "Member",
        affiliation: "KUET, Bangladesh",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Mohammad Shaifur Rahman",
        role: "Member",
        affiliation: "KUET, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Md. Salah Uddin Yusuf",
        role: "Member",
        affiliation: "KUET, Bangladesh",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Mostafa Zaman Chowdhury",
        role: "Member",
        affiliation: "KUET, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Md. Jahedul Islam",
        role: "Member",
        affiliation: "KUET, Bangladesh",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Morium Akter",
        role: "Member",
        affiliation: "Jahangirnagar University, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Md. Ezharul Islam",
        role: "Member",
        affiliation: "Jahangirnagar University, Bangladesh",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Golam Moazzam",
        role: "Member",
        affiliation: "Jahangirnagar University, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Israt Jahan",
        role: "Member",
        affiliation: "Jahangirnagar University, Bangladesh",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Sheak R. Haider Noori",
        role: "Member",
        affiliation: "Daffodil International University, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Deepa Sinha",
        role: "Member",
        affiliation: "South Asian University, India",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md Motiur Rahman",
        role: "Member",
        affiliation: "MBSTU, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Prof Kusum Deep",
        role: "Member",
        affiliation: "Indian Institute of Technology Roorkee, India",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Atulya Nagar",
        role: "Member",
        affiliation: "Liverpool Hope University, UK",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. ASM Mostafizur Rahman",
        role: "Member",
        affiliation: "Jahangirnagar University, Bangladesh",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Kedar Nath Das",
        role: "Member",
        affiliation: "NIT Silchar, Assam, India",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. A K Ojha",
        role: "Member",
        affiliation: "Indian Institute of Technology Bhubaneswar, India",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Manoj Thakur",
        role: "Member",
        affiliation: "IIT, Roorkee",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Anupam Yadav",
        role: "Member",
        affiliation: "National Institute of Technology Uttarakhand, India",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Neha Yadav",
        role: "Member",
        affiliation: "NIT Hamirpur, India",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. K P Singh",
        role: "Member",
        affiliation: "IIIT Allahabad, India",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Shashi Barak",
        role: "Member",
        affiliation: "Indian Institute of Technology Roorkee, India",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Pinkey Chauhan",
        role: "Member",
        affiliation: "Indian Institute of Technology, Roorkee, India",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Ashok Pal",
        role: "Member",
        affiliation: "ACE Devsthali Ambala, India",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Adel Aljumaily",
        role: "Member",
        affiliation: "UTS, Sydney, Australia",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Amitava Chatterjee",
        role: "Member",
        affiliation: "Jadavpur University, India",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Andres Muñoz",
        role: "Member",
        affiliation: "Universidad Católica San Antonio de Murcia",
        icon: "fas fa-user-tie"
    },
    {
        name: "D. Nagesh Kumar",
        role: "Member",
        affiliation: "Indian Institute of Science, Bangalore",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr G A Vijayalakshmi Pai",
        role: "Member",
        affiliation: "PSG College of Technology",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Gareth Peters",
        role: "Member",
        affiliation: "UNSW, Australia",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Ghanshyamsingh Thakur",
        role: "Member",
        affiliation: "MANIT, BHOPAL, India",
        icon: "fas fa-user-tie"
    },
    {
        name: "H J C Barbosa",
        role: "Member",
        affiliation: "Laboratório Nacional de Computação Científica",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Junzo Watada",
        role: "Member",
        affiliation: "Waseda University, Graduate School of IPS",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Kazumi Nakamatsu",
        role: "Member",
        affiliation: "Hyogo University, Japan",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. K C Tan",
        role: "Member",
        affiliation: "NUS, Singapore",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Montaz Ali",
        role: "Member",
        affiliation: "University of the Witwatersrand",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Munawara Shaik",
        role: "Member",
        affiliation: "Indian Institute of Technology (IIT) Delhi",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. N Chakraborti",
        role: "Member",
        affiliation: "Finland",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Neel Mani",
        role: "Member",
        affiliation: "Dublin City University",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Oleg Monakhov",
        role: "Member",
        affiliation: "ICMMG SB RAS",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Philip Moore",
        role: "Member",
        affiliation: "Lanzhou University",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. P N Suganthan",
        role: "Member",
        affiliation: "Nanyang Technological University",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Punam Bedi",
        role: "Member",
        affiliation: "University of Delhi",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Shyam Lal",
        role: "Member",
        affiliation: "National Institute of Technology Karnataka",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Sotirios Ziavras",
        role: "Member",
        affiliation: "New Jersey Institute of Technology",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Wei-Chiang Hong",
        role: "Member",
        affiliation: "Oriental Institute of Technology",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Mohammed Yeasin",
        role: "Member",
        affiliation: "University of Memphis, USA",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. A S M Touhidul Hasan",
        role: "Member",
        affiliation: "University of Asia Pacific, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Firoz Mridha",
        role: "Member",
        affiliation: "BUBT, Bangladesh",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Md. Ameer Ali",
        role: "Member",
        affiliation: "BUBT, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Mohd. Abdur Rashid",
        role: "Member",
        affiliation: "Noakhali University of Science & Technology",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Maniruzzaman",
        role: "Member",
        affiliation: "Khulna University, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Md. Shamim Ahsan",
        role: "Member",
        affiliation: "Khulna University, Bangladesh",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Md. Abdul Awal",
        role: "Member",
        affiliation: "Khulna University, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. S.M. Taohidul Islam",
        role: "Member",
        affiliation: "Patuakhali Science and Technology University",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Asadur Rahman",
        role: "Member",
        affiliation: "MIST, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Sang-Wong Lee",
        role: "Member",
        affiliation: "Gachon University, Republic of Korea",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Md. Anwar Hossain",
        role: "Member",
        affiliation: "KUET; MoH & FW, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Mukti M. Rana",
        role: "Member",
        affiliation: "Delaware State University, USA",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Jia Uddin",
        role: "Member",
        affiliation: "Woosong University, Republic of Korea",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Munjure Mowla",
        role: "Member",
        affiliation: "Rajshahi University of Engineering & Technology",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Yasuhiro Okamura",
        role: "Member",
        affiliation: "University of Tokushima, Japan",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Manoj Datta",
        role: "Member",
        affiliation: "RMIT University, Australia",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Forkan Uddin",
        role: "Member",
        affiliation: "Bangladesh University of Engineering and Technology, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. M M Hafizur Rahman",
        role: "Member",
        affiliation: "King Faisal University, Saudi Arabia",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Razzaqul Ahshan",
        role: "Member",
        affiliation: "Sultan Qaboos University, Oman",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Chaoqin Gan",
        role: "Member",
        affiliation: "Shanghai University, China",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Masudur Rahman",
        role: "Member",
        affiliation: "Pabna University of Science and Technology",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Md. Kamal Hosain",
        role: "Member",
        affiliation: "Rajshahi University of Engineering & Technology",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Fateha Samad",
        role: "Member",
        affiliation: "Rajshahi University of Engineering & Technology",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Tushar Kanti Roy",
        role: "Member",
        affiliation: "Rajshahi University of Engineering & Technology",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Zahurul Islam Sarkar",
        role: "Member",
        affiliation: "Rajshahi University of Engineering & Technology",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Md. Shamim Anower",
        role: "Member",
        affiliation: "Rajshahi University of Engineering & Technology",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Md. Saifuddin Faruk",
        role: "Member",
        affiliation: "Dhaka University of Engineering & Technology",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Md. Monirul Kabir",
        role: "Member",
        affiliation: "Dhaka University of Engineering & Technology",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Mohammod Abul Kashem",
        role: "Member",
        affiliation: "DUET, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Md. Nasim Akhtar",
        role: "Member",
        affiliation: "Dhaka University of Engineering & Technology",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Muhammad Ahsan Ullah",
        role: "Member",
        affiliation: "CUET, Bangladesh",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Md. Azad Hossain",
        role: "Member",
        affiliation: "CUET, Bangladesh",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Saiful Islam",
        role: "Member",
        affiliation: "CUET, Bangladesh",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Md. Noor A Rahim",
        role: "Member",
        affiliation: "University College Cork, Ireland",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Suruz Miah",
        role: "Member",
        affiliation: "Bradley University, USA",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Youngil Park",
        role: "Member",
        affiliation: "Kookmin University, South Korea",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Ki-Doo Kim",
        role: "Member",
        affiliation: "Kookmin University, South Korea",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Yeong Min Jang",
        role: "Member",
        affiliation: "Kookmin University, South Korea",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Soo Yeol Lee",
        role: "Member",
        affiliation: "Kyung Hee University, South Korea",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Tatsuo Tsuji",
        role: "Member",
        affiliation: "University of Fukui, Japan",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Ken Higuchi",
        role: "Member",
        affiliation: "University of Fukui, Japan",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Muhammad H. Rashid",
        role: "Member",
        affiliation: "Florida Polytechnic University, USA",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Federico Rosei",
        role: "Member",
        affiliation: "University of Quebec, Canada",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Bimal K. Bose",
        role: "Member",
        affiliation: "University of Tennessee, USA",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Mohammad A. Karim",
        role: "Member",
        affiliation: "University of Massachusetts, USA",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Manoranjan Paul",
        role: "Member",
        affiliation: "Charles Sturt University, Australia",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Muhammad Abdul Awal",
        role: "Member",
        affiliation: "CUNY, USA",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Nemai C. Karmakar",
        role: "Member",
        affiliation: "Monash University, Australia",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Sajjad Zahir",
        role: "Member",
        affiliation: "University of Lethbridge, Canada",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Radu Tarca",
        role: "Member",
        affiliation: "University of Oradea, Romania",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Sreenatha G. Anavatti",
        role: "Member",
        affiliation: "UNSW, Australia",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Rajiv Dusane",
        role: "Member",
        affiliation: "IIT Bombay, India",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Dylan Lu",
        role: "Member",
        affiliation: "UTS, Australia",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Nam-Tuan Le",
        role: "Member",
        affiliation: "Kookmin University, South Korea",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Michael Komodromos",
        role: "Member",
        affiliation: "Frederick University, Cyprus",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Tapan Saha",
        role: "Member",
        affiliation: "The University of Queensland, Australia",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Makoto Onizuka",
        role: "Member",
        affiliation: "Osaka University, Japan",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Tom Gedeon",
        role: "Member",
        affiliation: "Australian National University, Australia",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Yue Rong",
        role: "Member",
        affiliation: "Curtin University, Australia",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Md. Abdus Samad Kamal",
        role: "Member",
        affiliation: "Gunma University, Japan",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Golam Kibria",
        role: "Member",
        affiliation: "University of Calgary, Canada",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Kawser Parveen Chowdhury",
        role: "Member",
        affiliation: "Bangladesh University of Textiles",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Sharfun Nahar Arju",
        role: "Member",
        affiliation: "Bangladesh University of Textiles",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Md. Mahbubor Rahman",
        role: "Member",
        affiliation: "Bangladesh University of Textiles",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Emdad Sarker",
        role: "Member",
        affiliation: "Bangladesh University of Textiles",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Md. Reajul Islam",
        role: "Member",
        affiliation: "Bangladesh University of Textiles",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Ummul Khair Fatema",
        role: "Member",
        affiliation: "Bangladesh University of Textiles",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Md. Ismail Hossain",
        role: "Member",
        affiliation: "Khulna University of Engineering & Technology",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Habibur Rahman",
        role: "Member",
        affiliation: "Jashore University of Science and Technology",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Chanchal Kumar Kundu",
        role: "Member",
        affiliation: "Jashore University of Science and Technology",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Md. Abu Mowazzem Hossain",
        role: "Member",
        affiliation: "Chittagong University of Eng and Tech",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Md. Ashraful Islam",
        role: "Member",
        affiliation: "Bangladesh University of Engineering & Technology",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. M. Ahsan Habib",
        role: "Member",
        affiliation: "Islamic University of Technology (IUT), OIC",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Md. Mostaqur Rahman",
        role: "Member",
        affiliation: "Dhaka University of Engineering & Technology",
        icon: "fas fa-user-cog"
    },
    {
        name: "Dr. Nirendra Nath Mustafi",
        role: "Member",
        affiliation: "Rajshahi University of Engineering & Technology",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr. Kazi Mostafijur Rahman",
        role: "Member",
        affiliation: "Khulna University of Engineering & Technology",
        icon: "fas fa-user-tie"
    },
    {
        name: "Dr. Md. Zahid Hossain",
        role: "Member",
        affiliation: "Islamic University of Technology (IUT), OIC",
        icon: "fas fa-user-md"
    },
    {
        name: "Dr. Rubayet Karim",
        role: "Member",
        affiliation: "Jashore University of Science and Technology",
        icon: "fas fa-user-cog"
    }
];

// Publication Committee Members data
const programCommitteeMembers = [
    {
        name: "Professor Dr Ahsan Habib",
        role: "Chair",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-tie"
    },
    {
        name: "Professor Dr Md. Obaidur Rahman",
        role: "Co-chair",
        affiliation: "DUET",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Dr Nazrul Islam",
        role: "Secretary",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-cog"
    },
    {
        name: "Prof Dr Joykrisna Saha",
        role: "Member",
        affiliation: "Dept of Textile, MBSTU",
        icon: "fas fa-user-md"
    },
    {
        name: "Prof Dr Badrul Alam Miah",
        role: "Member",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-graduate"
    },
    {
        name: "Prof Dr Mahbuba Begum",
        role: "Member",
        affiliation: "Dept of CSE, MBSTU",
        icon: "fas fa-user-tie"
    },
    {
        name: "Prof Dr Md Abir Hossain",
        role: "Member",
        affiliation: "Dept of ICT, MBSTU",
        icon: "fas fa-user-md"
    }
];

// National Registration data
const nationalRegistration = [
    {
        type: "IEEE Member",
        price: "6,000.00",
        currency: "BDT",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    },
    {
        type: "Non-IEEE Member",
        price: "8,000.00",
        currency: "BDT",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    },
    {
        type: "Student Author",
        subtitle: "(IEEE Member)",
        price: "5,000.00",
        currency: "BDT",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    },
    {
        type: "Student Author",
        subtitle: "(Non-IEEE Member)",
        price: "5,500.00",
        currency: "BDT",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    },
    {
        type: "Workshop Paper and Poster",
        subtitle: "(Abstract only)",
        price: "5,000.00",
        currency: "BDT",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    },
    {
        type: "Non-Author Participant",
        price: "5,500.00",
        currency: "BDT",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    }
];

// International Registration data
const internationalRegistration = [
    {
        type: "IEEE Member",
        price: "80.00",
        currency: "USD",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    },
    {
        type: "Non-IEEE Member",
        price: "100.00",
        currency: "USD",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    },
    {
        type: "Student Author",
        subtitle: "(IEEE Member)",
        price: "70.00",
        currency: "USD",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    },
    {
        type: "Student Author",
        subtitle: "(Non-IEEE Member)",
        price: "75.00",
        currency: "USD",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    },
    {
        type: "Workshop Paper and Poster",
        subtitle: "(Abstract only)",
        price: "70.00",
        currency: "USD",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    },
    {
        type: "Non-Author Participant",
        price: "75.00",
        currency: "USD",
        features: [
            "Conference Access",
            "Lunch & Coffee Breaks",
            "Conference Materials",
            "Certificate of Participation",
            "Conference Kit and Proceedings"
        ]
    }
];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    try {
        // Prevent default scroll restoration
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }
        
        // Remove any hash from URL
        if (window.location.hash) {
            history.replaceState(null, null, ' ');
        }
        
        initializeNavigation();
        initializeProgramTabs();
        initializeCommitteeTabs();
        initializeRegistrationTabs();
        loadSpeakers();
        loadOrganizingCommittee();
        loadTechnicalProgramCommittee();
        loadAdvisoryCommittee();
        loadProgramCommitteeMembers();
        loadRegistrationOptions('national');
        loadRegistrationOptions('international');
        initializeForms();
        initializeScrollEffects();
        initializeModal();
        
        // Force scroll to top after everything loads
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    } catch(error) {
        // Silent error handling for production
    }
});

// Navigation functionality
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger || !navMenu || !navLinks) return;
    
    // Mobile menu toggle with body scroll lock
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open on mobile
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on a link, but not on dropdown toggle
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const parentNavItem = this.closest('.nav-item');
            const isDropdownToggle = parentNavItem && parentNavItem.querySelector('.submenu');

            // On mobile, if the clicked link is a dropdown toggle, let the other listener handle it and do not close the menu.
            if (isDropdownToggle && window.innerWidth <= 836) {
                return; 
            }

            // For all other main links, close the menu.
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Add listener for submenu links to close the nav on mobile
    document.querySelectorAll('.submenu a').forEach(subLink => {
        subLink.addEventListener('click', function() {
            if (window.innerWidth <= 836) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });
    
    // Close menu when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Smooth scrolling for navigation links (account for fixed header precisely)
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const hash = this.getAttribute('href');
            if (!hash || !hash.startsWith('#')) return;
            e.preventDefault();

            const target = document.querySelector(hash);
            if (!target) return;

            const header = document.querySelector('.header');
            const headerOffset = header ? header.offsetHeight + 8 : 64;
            const elementPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
        }, { capture: false });
    });

    // Mobile dropdown toggle
    const dropdownToggles = document.querySelectorAll('.nav-item > a.nav-link');
    dropdownToggles.forEach(toggle => {
        if (toggle.parentElement.querySelector('.submenu')) {
            toggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 836) {
                    e.preventDefault();
                    const parentItem = this.parentElement;
                    const submenu = parentItem.querySelector('.submenu');

                    if (submenu) {
                        if (submenu.style.display === 'block') {
                            submenu.style.display = 'none';
                            parentItem.classList.remove('open');
                        } else {
                            submenu.style.display = 'block';
                            parentItem.classList.add('open');
                        }
                    }
                }
            });
        }
    });

    // Active navigation link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Program tabs functionality
function initializeProgramTabs() {
    const programTabs = document.querySelectorAll('.tab-btn');
    const programDays = document.querySelectorAll('.program-day');
    
    if (!programTabs || programTabs.length === 0) return;
    
    programTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetDay = this.getAttribute('data-day');
            
            // Remove active class from all tabs and days
            programTabs.forEach(t => t.classList.remove('active'));
            programDays.forEach(d => d.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding day
            this.classList.add('active');
            document.getElementById(targetDay).classList.add('active');
        });
    });
}

// Committee tabs functionality
function initializeCommitteeTabs() {
    const committeeTabs = document.querySelectorAll('.committee-tab-btn');
    const committeeGroups = document.querySelectorAll('.committee-content .committee-group');
    
    committeeTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetCommittee = this.getAttribute('data-committee');
            
            // Remove active class from all tabs and groups
            committeeTabs.forEach(t => t.classList.remove('active'));
            committeeGroups.forEach(g => g.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding group
            this.classList.add('active');
            const targetGroup = document.querySelector(`.committee-group[data-committee="${targetCommittee}"]`);
            if (targetGroup) {
                targetGroup.classList.add('active');
            }
        });
    });
}



// Load speakers dynamically
function loadSpeakers() {
    const speakersContainer = document.getElementById('speakersContainer');
    
    if (!speakersContainer) return;
    
    speakersContainer.innerHTML = '';
    
    speakers.forEach(speaker => {
        const speakerCard = document.createElement('div');
        speakerCard.className = 'speaker-card';
        
        // Check if image is a file path or FontAwesome icon class
        const imageHTML = speaker.image.includes('/') || speaker.image.includes('.') 
            ? `<img src="${speaker.image}" alt="${speaker.name}">`
            : `<i class="${speaker.image}"></i>`;
        
        speakerCard.innerHTML = `
            <div class="speaker-image">
                ${imageHTML}
            </div>
            <div class="speaker-info">
                <h3 class="speaker-name">${speaker.name}</h3>
                <p class="speaker-title">${speaker.title}</p>
                <p class="speaker-bio">${speaker.bio}</p>
            </div>
        `;
        speakersContainer.appendChild(speakerCard);
    });
}

// Load advisory committee dynamically
function loadAdvisoryCommittee() {
    const advisoryContainer = document.getElementById('advisoryCommitteeContainer');
    if (!advisoryContainer) return;
    
    const membersPerPage = 9;
    let currentPage = 1;
    const totalPages = Math.ceil(advisoryCommittee.length / membersPerPage);
    
    const paginationContainer = document.getElementById('advisoryPaginationContainer');
    const prevBtn = document.getElementById('advisoryPrevBtn');
    const nextBtn = document.getElementById('advisoryNextBtn');
    const currentPageSpan = document.getElementById('advisoryCurrentPage');
    const totalPagesSpan = document.getElementById('advisoryTotalPages');
    
    if (advisoryCommittee.length > membersPerPage && paginationContainer) {
        paginationContainer.style.display = 'flex';
    }
    
    function renderPage(page) {
        advisoryContainer.innerHTML = '';
        const startIndex = (page - 1) * membersPerPage;
        const endIndex = Math.min(startIndex + membersPerPage, advisoryCommittee.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const member = advisoryCommittee[i];
            const memberCard = document.createElement('div');
            memberCard.className = 'committee-card';
            
            const imageHTML = member.icon.includes('/') || member.icon.includes('.') 
                ? `<img src="${member.icon}" alt="${member.name}">`
                : `<i class="${member.icon}"></i>`;
            
            memberCard.innerHTML = `
                <div class="committee-icon">
                    ${imageHTML}
                </div>
                <div class="committee-info">
                    <div class="name">${member.name}</div>
                    <div class="affiliation">${member.affiliation}</div>
                </div>
            `;
            advisoryContainer.appendChild(memberCard);
        }
        
        if (currentPageSpan) currentPageSpan.textContent = page;
        if (totalPagesSpan) totalPagesSpan.textContent = totalPages;
        if (prevBtn) prevBtn.disabled = page === 1;
        if (nextBtn) nextBtn.disabled = page === totalPages;
        
        document.getElementById('committee')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderPage(currentPage);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPage(currentPage);
            }
        });
    }
    
    renderPage(currentPage);
}

// Load organizing committee dynamically
function loadOrganizingCommittee() {
    const organizingContainer = document.getElementById('organizingCommitteeContainer');
    if (!organizingContainer) return;
    
    const membersPerPage = 9;
    let currentPage = 1;
    const totalPages = Math.ceil(organizingCommittee.length / membersPerPage);
    
    const paginationContainer = document.getElementById('organizingPaginationContainer');
    const prevBtn = document.getElementById('organizingPrevBtn');
    const nextBtn = document.getElementById('organizingNextBtn');
    const currentPageSpan = document.getElementById('organizingCurrentPage');
    const totalPagesSpan = document.getElementById('organizingTotalPages');
    
    if (organizingCommittee.length > membersPerPage && paginationContainer) {
        paginationContainer.style.display = 'flex';
    }
    
    function renderPage(page) {
        organizingContainer.innerHTML = '';
        const startIndex = (page - 1) * membersPerPage;
        const endIndex = Math.min(startIndex + membersPerPage, organizingCommittee.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const member = organizingCommittee[i];
            const memberCard = document.createElement('div');
            memberCard.className = 'committee-card';
            
            const imageHTML = member.icon.includes('/') || member.icon.includes('.') 
                ? `<img src="${member.icon}" alt="${member.name}">`
                : `<i class="${member.icon}"></i>`;
            
            memberCard.innerHTML = `
                <div class="committee-icon">
                    ${imageHTML}
                </div>
                <div class="committee-info">
                    <div class="name">${member.name}</div>
                    ${member.role ? `<div class="role">${member.role}</div>` : ''}
                    <div class="affiliation">${member.affiliation}</div>
                </div>
            `;
            organizingContainer.appendChild(memberCard);
        }
        
        if (currentPageSpan) currentPageSpan.textContent = page;
        if (totalPagesSpan) totalPagesSpan.textContent = totalPages;
        if (prevBtn) prevBtn.disabled = page === 1;
        if (nextBtn) nextBtn.disabled = page === totalPages;
        
        document.getElementById('committee')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderPage(currentPage);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPage(currentPage);
            }
        });
    }
    
    renderPage(currentPage);
}

// Load sponsor sub-committee dynamically
function loadSponsorSubCommittee() {
    const sponsorContainer = document.getElementById('sponsorSubCommitteeContainer');
    if (!sponsorContainer) return;
    
    const membersPerPage = 9;
    let currentPage = 1;
    const totalPages = Math.ceil(sponsorSubCommittee.length / membersPerPage);
    
    const paginationContainer = document.getElementById('sponsorPaginationContainer');
    const prevBtn = document.getElementById('sponsorPrevBtn');
    const nextBtn = document.getElementById('sponsorNextBtn');
    const currentPageSpan = document.getElementById('sponsorCurrentPage');
    const totalPagesSpan = document.getElementById('sponsorTotalPages');
    
    if (sponsorSubCommittee.length > membersPerPage && paginationContainer) {
        paginationContainer.style.display = 'flex';
    }
    
    function renderPage(page) {
        sponsorContainer.innerHTML = '';
        const startIndex = (page - 1) * membersPerPage;
        const endIndex = Math.min(startIndex + membersPerPage, sponsorSubCommittee.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const member = sponsorSubCommittee[i];
            const memberCard = document.createElement('div');
            memberCard.className = 'committee-card';
            
            const imageHTML = member.icon.includes('/') || member.icon.includes('.') 
                ? `<img src="${member.icon}" alt="${member.name}">`
                : `<i class="${member.icon}"></i>`;
            
            memberCard.innerHTML = `
                <div class="committee-icon">
                    ${imageHTML}
                </div>
                <div class="committee-info">
                    <div class="name">${member.name}</div>
                    ${member.role ? `<div class="role">${member.role}</div>` : ''}
                    <div class="affiliation">${member.affiliation}</div>
                </div>
            `;
            sponsorContainer.appendChild(memberCard);
        }
        
        if (currentPageSpan) currentPageSpan.textContent = page;
        if (totalPagesSpan) totalPagesSpan.textContent = totalPages;
        if (prevBtn) prevBtn.disabled = page === 1;
        if (nextBtn) nextBtn.disabled = page === totalPages;
        
        document.getElementById('committee')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderPage(currentPage);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPage(currentPage);
            }
        });
    }
    
    renderPage(currentPage);
}

// Load technical program committee dynamically
function loadTechnicalProgramCommittee() {
    const tpcContainer = document.getElementById('technicalProgramCommitteeContainer');
    if (!tpcContainer) return;
    
    const membersPerPage = 9;
    let currentPage = 1;
    const totalPages = Math.ceil(technicalProgramCommittee.length / membersPerPage);
    
    const paginationContainer = document.getElementById('technicalPaginationContainer');
    const prevBtn = document.getElementById('technicalPrevBtn');
    const nextBtn = document.getElementById('technicalNextBtn');
    const currentPageSpan = document.getElementById('technicalCurrentPage');
    const totalPagesSpan = document.getElementById('technicalTotalPages');
    
    if (technicalProgramCommittee.length > membersPerPage && paginationContainer) {
        paginationContainer.style.display = 'flex';
    }
    
    function renderPage(page) {
        tpcContainer.innerHTML = '';
        const startIndex = (page - 1) * membersPerPage;
        const endIndex = Math.min(startIndex + membersPerPage, technicalProgramCommittee.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const member = technicalProgramCommittee[i];
            const memberCard = document.createElement('div');
            memberCard.className = 'committee-card';
            
            const imageHTML = member.icon.includes('/') || member.icon.includes('.') 
                ? `<img src="${member.icon}" alt="${member.name}">`
                : `<i class="${member.icon}"></i>`;
            
            memberCard.innerHTML = `
                <div class="committee-icon">
                    ${imageHTML}
                </div>
                <div class="committee-info">
                    <div class="name">${member.name}</div>
                    ${member.role ? `<div class="role">${member.role}</div>` : ''}
                    <div class="affiliation">${member.affiliation}</div>
                </div>
            `;
            tpcContainer.appendChild(memberCard);
        }
        
        if (currentPageSpan) currentPageSpan.textContent = page;
        if (totalPagesSpan) totalPagesSpan.textContent = totalPages;
        if (prevBtn) prevBtn.disabled = page === 1;
        if (nextBtn) nextBtn.disabled = page === totalPages;
        
        document.getElementById('committee')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderPage(currentPage);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPage(currentPage);
            }
        });
    }
    
    renderPage(currentPage);
}

// Load Program Committee Members dynamically
function loadProgramCommitteeMembers() {
    const container = document.getElementById('programCommitteeMembersContainer');
    if (!container) return;
    
    const membersPerPage = 9; // 3 rows × 3 members
    let currentPage = 1;
    const totalPages = Math.ceil(programCommitteeMembers.length / membersPerPage);
    
    const paginationContainer = document.getElementById('membersPaginationContainer');
    const prevBtn = document.getElementById('prevPageBtn');
    const nextBtn = document.getElementById('nextPageBtn');
    const currentPageSpan = document.getElementById('currentPage');
    const totalPagesSpan = document.getElementById('totalPages');
    
    // Show pagination only if there are more than membersPerPage members
    if (programCommitteeMembers.length > membersPerPage && paginationContainer) {
        paginationContainer.style.display = 'flex';
    }
    
    function renderPage(page) {
        container.innerHTML = '';
        const startIndex = (page - 1) * membersPerPage;
        const endIndex = Math.min(startIndex + membersPerPage, programCommitteeMembers.length);
        
        for (let i = startIndex; i < endIndex; i++) {
            const member = programCommitteeMembers[i];
            const memberCard = document.createElement('div');
            memberCard.className = 'advisory-committee-member';
            
            const iconDiv = document.createElement('div');
            iconDiv.className = 'member-icon';
            if (member.icon.startsWith('public/')) {
                iconDiv.innerHTML = `<img src="${member.icon}" alt="${member.name}" onerror="this.parentElement.innerHTML='<i class=\\'fas fa-user-graduate\\'></i>';">`;
            } else {
                iconDiv.innerHTML = `<i class="${member.icon}"></i>`;
            }
            
            const infoDiv = document.createElement('div');
            infoDiv.className = 'member-info';
            infoDiv.innerHTML = `<h4>${member.name}</h4><p>${member.affiliation}</p>`;
            
            memberCard.appendChild(iconDiv);
            memberCard.appendChild(infoDiv);
            container.appendChild(memberCard);
        }
        
        // Update pagination info
        if (currentPageSpan) currentPageSpan.textContent = page;
        if (totalPagesSpan) totalPagesSpan.textContent = totalPages;
        
        // Update button states
        if (prevBtn) prevBtn.disabled = page === 1;
        if (nextBtn) nextBtn.disabled = page === totalPages;
        
        // Scroll to reviewers section
        document.getElementById('reviewers')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Event listeners for pagination
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderPage(currentPage);
            }
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderPage(currentPage);
            }
        });
    }
    
    // Initial render
    renderPage(currentPage);
}



// Load registration options dynamically
function loadRegistrationOptions(type) {
    const registrationData = type === 'national' ? nationalRegistration : internationalRegistration;
    const containerId = type === 'national' ? 'nationalRegistrationContainer' : 'internationalRegistrationContainer';
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    container.innerHTML = '';
    
    registrationData.forEach(option => {
        const card = document.createElement('div');
        card.className = `pricing-card${option.featured ? ' featured' : ''}`;
        
        const featuresHTML = option.features.map(feature => `<li>${feature}</li>`).join('');
        const subtitleHTML = option.subtitle ? `<p class="pricing-subtitle">${option.subtitle}</p>` : '';
        
        card.innerHTML = `
            <h3>${option.type}</h3>
            ${subtitleHTML}
            <div class="price">${option.currency === 'BDT' ? '৳' : '$'}${option.price}</div>
            <ul class="features">
                ${featuresHTML}
            </ul>
            <button class="btn ${option.featured ? 'btn-primary' : 'btn-outline'}" onclick="openRegistrationModal('${option.type.toLowerCase().replace(/\s+/g, '-')}')">
                Register
            </button>
        `;
        
        container.appendChild(card);
    });
}

// Initialize registration tabs
function initializeRegistrationTabs() {
    const registrationTabs = document.querySelectorAll('.registration-tab-btn');
    const registrationGroups = document.querySelectorAll('.registration-content .registration-group');
    
    registrationTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const targetType = this.getAttribute('data-registration');
            
            // Remove active class from all tabs and groups
            registrationTabs.forEach(t => t.classList.remove('active'));
            registrationGroups.forEach(g => g.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding group
            this.classList.add('active');
            const targetGroup = document.querySelector(`.registration-group[data-registration="${targetType}"]`);
            if (targetGroup) {
                targetGroup.classList.add('active');
            }
        });
    });
}

// Load committees dynamically
// Commented out - using static data instead of API
/*
async function loadCommittees() {
    try {
        const res = await fetch('api/get_committees.php?active=1');
        const json = await res.json();
        if (!json.success) return;

        const committees = json.data;
        const lists = document.querySelectorAll('.committee-list');
        lists.forEach(list => {
            const slug = list.getAttribute('data-committee-slug');
            const committee = committees.find(c => c.slug === slug);
            if (!committee) return;
            list.innerHTML = '';
            committee.members.forEach(m => {
                const card = document.createElement('div');
                card.className = 'committee-card';
                card.innerHTML = `
                    <div class="name">${m.name}</div>
                    ${m.role ? `<div class="role">${m.role}</div>` : ''}
                    ${m.affiliation ? `<div class="affiliation">${m.affiliation}</div>` : ''}
                `;
                list.appendChild(card);
            });
        });
    } catch (e) {
        console.error('Failed to load committees', e);
    }
}
*/

// Load important dates dynamically (both inline and main section)
// Commented out - using static data instead of API
/*
async function loadImportantDates() {
    try {
        const res = await fetch('api/get_dates.php?active=1');
        const json = await res.json();
        if (!json.success) return;
        const dates = json.data;

        function renderDates(containerId) {
            const container = document.getElementById(containerId);
            if (!container) return;
            container.innerHTML = '';
            dates.forEach(d => {
                const item = document.createElement('div');
                item.className = 'date-item';
                const dateText = d.note ? d.note : (d.date_value ? new Date(d.date_value).toLocaleDateString('en-US', { year:'numeric', month:'long', day:'numeric' }) : '');
                item.innerHTML = `
                    <span class="date-label">${d.label}</span>
                    <span class="date-value">${dateText}</span>
                `;
                container.appendChild(item);
            });
        }

        renderDates('datesInline');
        renderDates('datesMain');
    } catch (e) {
        console.error('Failed to load important dates', e);
    }
}
*/

// Form handling
function initializeForms() {
    // Paper submission form
    const paperForm = document.getElementById('paperSubmissionForm');
    if (paperForm) {
        paperForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handlePaperSubmission(this);
        });
    }

    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleContactSubmission(this);
        });
    }

    // Registration form
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleRegistrationSubmission(this);
        });
    }
}

// Handle paper submission
function handlePaperSubmission(form) {
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.innerHTML = '<span class="loading"></span> Submitting...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showMessage('Paper submitted successfully! You will receive a confirmation email shortly.', 'success');
        
        // Reset form
        form.reset();
    }, 2000);
}

// Handle contact form submission
function handleContactSubmission(form) {
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.innerHTML = '<span class="loading"></span> Sending...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showMessage('Message sent successfully! We will get back to you soon.', 'success');
        
        // Reset form
        form.reset();
    }, 2000);
}

// Handle registration submission
function handleRegistrationSubmission(form) {
    const formData = new FormData(form);
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    const modal = document.getElementById('registrationModal');
    
    // Show loading state
    submitButton.innerHTML = '<span class="loading"></span> Processing...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showMessage('Registration completed successfully! You will receive a confirmation email with payment details.', 'success');
        
        // Close modal
        if (modal) {
            modal.style.display = 'none';
        }
        
        // Reset form
        form.reset();
    }, 2000);
}

function openScopeModal(cardElement) {
    const modal = document.getElementById('scopeModal');
    const modalContent = document.getElementById('scopeModalContent');

    if (modal && modalContent) {
        // Clone the scope number, h3 and ul from the clicked card
        const scopeNumber = cardElement.querySelector('.scope-number').cloneNode(true);
        const title = cardElement.querySelector('h3').cloneNode(true);
        const detailsList = cardElement.querySelector('ul').cloneNode(true);

        // Clear previous content
        modalContent.innerHTML = '';

        // Append new content in desired order
        modalContent.appendChild(scopeNumber);
        modalContent.appendChild(title);
        modalContent.appendChild(detailsList);

        // Display the modal
        modal.style.display = 'flex';
    }
}

// Functions for sharing flyer modal
function openShareModal() {
    const modal = document.getElementById('shareModal');
    const input = document.getElementById('flyerLinkInput');
    if (modal && input) {
        const flyerUrl = window.location.origin + '/public/flyer.jpeg';
        input.value = flyerUrl;
        modal.style.display = 'flex';
    }
}

function copyLinkFromModal() {
    const input = document.getElementById('flyerLinkInput');
    const messageElement = document.getElementById('copy-success-message');
    const modal = document.getElementById('shareModal');

    if (input && messageElement && modal) {
        // Reset message style
        messageElement.style.color = '#065f46'; // Default success color

        navigator.clipboard.writeText(input.value)
            .then(() => {
                // Show success message
                messageElement.textContent = 'Link copied to clipboard!';
                messageElement.style.display = 'block';

                // Set timeout to hide message and close modal
                setTimeout(() => {
                    messageElement.style.display = 'none';
                    modal.style.display = 'none';
                }, 3000); // 3 seconds
            })
            .catch(err => {
                // Show error message
                messageElement.textContent = 'Failed to copy link. Please copy it manually.';
                messageElement.style.color = '#991b1b'; // Error color
                messageElement.style.display = 'block';

                console.error('Failed to copy link from modal: ', err);

                // Set timeout to hide the error message
                setTimeout(() => {
                    messageElement.style.display = 'none';
                }, 5000); // 5 seconds for error
            });
    }
}

// Show message function
function showMessage(text, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    // Create new message
    const message = document.createElement('div');
    message.className = `message ${type}`;
    message.textContent = text;
    
    // Insert message at the top of the page
    const body = document.body;
    body.insertBefore(message, body.firstChild);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        message.remove();
    }, 5000);
}

// Modal functionality
function initializeModal() {
    const modal = document.getElementById('registrationModal');
    const closeModal = document.querySelector('.close');
    
    if (!modal) return;
    if (!closeModal) return;
    
    // Close modal when clicking the X
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside of it
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
        }
    });
}

// Open registration modal
function openRegistrationModal(type) {
    const modal = document.getElementById('registrationModal');
    const typeInput = document.getElementById('registrationType');
    
    if (modal && typeInput) {
        typeInput.value = type;
        modal.style.display = 'flex';
        
        // Scroll to top of modal
        modal.scrollTop = 0;
        
        // Focus on first input
        const firstInput = modal.querySelector('input[type="text"]');
        if (firstInput) {
            firstInput.focus();
        }
    }
}

// Scroll effects
function initializeScrollEffects() {
    
    // Animate elements on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll('.about-card, .speaker-card, .pricing-card, .program-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Utility functions
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            showFieldError(field, 'This field is required');
            isValid = false;
        } else {
            clearFieldError(field);
            
            // Email validation
            if (field.type === 'email' && !validateEmail(field.value)) {
                showFieldError(field, 'Please enter a valid email address');
                isValid = false;
            }
            
            // Phone validation
            if (field.type === 'tel' && !validatePhone(field.value)) {
                showFieldError(field, 'Please enter a valid phone number');
                isValid = false;
            }
        }
    });
    
    return isValid;
}

function showFieldError(field, message) {
    clearFieldError(field);
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#dc2626';
    errorDiv.style.fontSize = '0.875rem';
    errorDiv.style.marginTop = '0.25rem';
    
    field.parentNode.appendChild(errorDiv);
    field.style.borderColor = '#dc2626';
}

function clearFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = '#e5e7eb';
}

// Countdown timer for conference
function initializeCountdown() {
    const countdownElement = document.getElementById('countdown');
    if (!countdownElement) return;
    
    const conferenceDate = new Date('2024-03-15T09:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = conferenceDate - now;
        
        if (distance < 0) {
            countdownElement.innerHTML = 'Conference has started!';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownElement.innerHTML = `
            <div class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">Days</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">Hours</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">Minutes</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${seconds}</span>
                <span class="countdown-label">Seconds</span>
            </div>
        `;
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

// Initialize countdown when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCountdown);

// Sticky Secondary Navigation
let secondaryNav = null;
let lastScrollTop = 0;

function initStickyNav() {
    secondaryNav = document.getElementById('secondaryNav');
    
    if (!secondaryNav) return;
    
    window.addEventListener('scroll', handleNavScroll);
    
    // Handle navigation active states
    handleNavActiveStates();
}

function handleNavScroll() {
    if (!secondaryNav) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        secondaryNav.classList.add('scrolled');
    } else {
        secondaryNav.classList.remove('scrolled');
    }
    
    // Update active nav state on scroll
    updateActiveNavState();
    
    lastScrollTop = scrollTop;
}

function updateActiveNavState() {
    // Skip auto-updating nav state for multi-page setup
    // Active state is set by the .active class in HTML for each page
    return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Get navbar heights for offset calculation
    const topNavHeight = document.getElementById('topNav')?.offsetHeight || 0;
    const secondaryNavHeight = secondaryNav?.offsetHeight || 0;
    const totalNavHeight = topNavHeight + secondaryNavHeight;
    
    // If at absolute top (account for top navbar), only HOME should be active
    if (scrollTop < totalNavHeight) {
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === '#home') {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        return;
    }
    
    // Find the current active section
    let activeSection = '';
    let maxVisibleSection = { id: '', visibleArea: 0 };
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        // Calculate how much of this section is visible
        const viewportTop = scrollTop + totalNavHeight;
        const viewportBottom = scrollTop + window.innerHeight;
        
        const visibleTop = Math.max(viewportTop, sectionTop);
        const visibleBottom = Math.min(viewportBottom, sectionTop + sectionHeight);
        const visibleArea = Math.max(0, visibleBottom - visibleTop);
        
        // Track section with most visible area
        if (visibleArea > maxVisibleSection.visibleArea) {
            maxVisibleSection = { id: sectionId, visibleArea: visibleArea };
        }
    });
    
    activeSection = maxVisibleSection.id;
    
    // Update nav link active states
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        const linkSection = href.replace('#', '');
        
        if (linkSection === activeSection) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function handleNavActiveStates() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Check if this is an anchor link (starts with #) or a page link (.html)
            if (href && href.startsWith('#')) {
                // This is an anchor link for single-page navigation - prevent default
                e.preventDefault();
                
                const targetId = href.replace('#', '');
                
                // HOME link - scroll to absolute top (show top navbar)
                if (targetId === 'home') {
                    // Instant scroll first, then smooth
                    window.scrollTo(0, 0);
                    
                    // Update active state immediately
                    navLinks.forEach(l => l.classList.remove('active'));
                    this.classList.add('active');
                    return;
                }
                
                // Other sections - scroll with offset
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    const topNavHeight = document.getElementById('topNav')?.offsetHeight || 0;
                    const secondaryNavHeight = secondaryNav?.offsetHeight || 0;
                    const offset = topNavHeight + secondaryNavHeight;
                    const targetPosition = targetSection.offsetTop - offset + 1;
                    
                    window.scrollTo({
                        top: targetPosition,
                        left: 0,
                        behavior: 'smooth'
                    });
                }
            }
            // If it's a page link (.html), let the browser handle navigation normally
            // by NOT calling e.preventDefault()
        });
    });
    
    // Set initial active state
    updateActiveNavState();
}

// Add click functionality to date banner items for smooth scroll to dates section
function initDateBannerClicks() {
    const dateItems = document.querySelectorAll('.date-banner-item');
    dateItems.forEach(item => {
        item.addEventListener('click', () => {
            const datesSection = document.getElementById('dates');
            if (datesSection) {
                const navHeight = secondaryNav ? secondaryNav.offsetHeight : 60;
                const targetPosition = datesSection.offsetTop - navHeight - 20;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initStickyNav();
    initDateBannerClicks();
});

// Test function for debugging
function testModal() {
    const modal = document.getElementById('registrationModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

// Export functions for use in other scripts
window.conferenceWebsite = {
    openRegistrationModal,
    showMessage,
    validateForm,
    formatDate,
    validateEmail,
    validatePhone,
    testModal,
    initStickyNav,
    initDateBannerClicks
};