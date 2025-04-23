from playwright.sync_api import Page

class RaidPage:
    def __init__(self, page: Page):
        self.page = page

    def login(self, username: str, password: str):
        self.page.goto("https://app.test.raid.org.au/login")
        self.page.get_by_role("button", name="AAF").click()
        self.page.get_by_role("textbox", name="Username or email").fill(username)
        self.page.get_by_role("textbox", name="Password").fill(password)
        self.page.get_by_role("button", name="Sign In").click()
        if not self.page.get_by_role("button", name="/d3cf3ebc").is_visible():
            raise Exception("Login failed: Unable to find the expected element after login.")

    def navigate_to_raid(self):
        self.page.get_by_text("10.82841/d3cf3ebc").click()
        assert self.page.locator("#root div").filter(has_text="DatesTitles1Descriptions1Contributors1Organisations1Related Objects0Alternate").nth(3).is_visible()