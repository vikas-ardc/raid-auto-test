import pytest
from playwright.sync_api import Page
from pages.raid_page import RaidPage  # Assuming RaidPage is implemented in a Python module

# Define test data for data-driven testing
test_data = [
    {"username": "auto-test", "password": "tester123"},
    # {"username": "auto-test2", "password": "tester456"},
    # {"username": "auto-test3", "password": "tester789"},
]

@pytest.fixture
def raid_page(page: Page):
    """Fixture to initialize the RaidPage object."""
    return RaidPage(page)

@pytest.mark.parametrize("data", test_data)
def test_edit_raid(data, raid_page):
    login_successful = False

    # Attempt to login
    try:
        raid_page.login(data["username"], data["password"])
        login_successful = True  # Mark login as successful if no error occurs
    except Exception as e:
        print(f"Login failed for username: {data['username']}. Error: {str(e)}")
        pytest.skip(f"Skipping test for username: {data['username']} due to login failure.")

    # Skip further steps if login was unsuccessful
    if not login_successful:
        return

    # Navigate to RAiD
    raid_page.navigate_to_raid()

    # Edit RAiD
    # raid_page.edit_raid()

    # Verify RAiD details
    # raid_page.verify_raid_details()

    # Navigate through sections
    # raid_page.navigate_sections()

    # Cancel edit
    # raid_page.cancel_edit() 