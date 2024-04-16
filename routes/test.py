from bs4 import BeautifulSoup
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium import webdriver
import re

driver = webdriver.Chrome()

driver.get("https://dashboard.midtrans.com/login")

email_field = driver.find_element(By.NAME, "user[email]")
email_field.clear()
email_field.send_keys("siemprecomandante666@gmail.com")

password_field = driver.find_element(By.NAME, "user[password]")
password_field.clear()
password_field.send_keys("Indra999")

login_button = driver.find_element(By.XPATH, "//button[@type='submit']")
login_button.click()

driver.implicitly_wait(10)

driver.get("https://dashboard.sandbox.midtrans.com/beta/transactions")

html = driver.page_source

soup = BeautifulSoup(html, "html.parser")

table = soup.find("table", class_="Table__QDEuZ")

if table:
    rows = table.find_all("tr", class_="row__JqiDJ")

    for row in rows:
        cells = row.find_all("td", class_="cell__kHjib")

        if len(cells) > 4:
            order_id_tag = cells[1].find("span")
            order_id = order_id_tag.get_text(
                strip=True) if order_id_tag else None

            status_tag = cells[4].find("span", class_="Tag__sPbtK")
            status = status_tag.get_text(strip=True) if status_tag else None

            if order_id and status:
                if re.search(r'NusaVacation-', order_id) and status == "Settlement":
                    print("Order ID:", order_id, "| STATUS:",
                          status, "| Sudah dibayar")
                else:
                    print("Order ID:", order_id, "| STATUS:", status,
                          "| Belum dibayar atau status tidak sesuai")
            else:
                print("Data tidak lengkap atau tidak ditemukan.")
        else:
            print(
                "Tidak cukup banyak sel dalam baris untuk mengambil data ORDER ID dan STATUS.")
else:
    print("Tabel tidak ditemukan.")

driver.quit()
