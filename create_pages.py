#!/usr/bin/env python3
"""Generate all conference website pages"""

PAGES_DATA = {
    'scopes.html': {
        'title': 'Conference Scopes',
        'content_file': 'scopes_content.txt'
    },
    'speakers.html': {
        'title': 'Keynote Speakers',
        'content_file': 'speakers_content.txt'  
    },
    'program.html': {
        'title': 'Conference Program',
        'content_file': 'program_content.txt'
    },
    'committee.html': {
        'title': 'Committee',
        'content_file': 'committee_content.txt'
    },
    'reviewers.html': {
        'title': 'PC Members',
        'content_file': 'reviewers_content.txt'
    },
    'submission.html': {
        'title': 'Submission',
        'content_file': 'submission_content.txt'
    },
    'registration.html': {
        'title': 'Registration',
        'content_file': 'registration_content.txt'
    },
    'dates.html': {
        'title': 'Important Dates',
        'content_file': 'dates_content.txt'
    },
    'contact.html': {
        'title': 'Contact',
        'content_file': 'contact_content.txt'
    }
}

# Read original HTML to extract sections
with open('/mnt/user-data/uploads/index.html', 'r', encoding='utf-8') as f:
    original_html = f.read()

print("Pages to create:", list(PAGES_DATA.keys()))
print("Script ready - will extract sections from original HTML")
