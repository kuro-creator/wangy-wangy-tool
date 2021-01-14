const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wangy wangy tool</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.gstatic.com">
<link rel="icon" href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b4aeaee-6aee-4bc8-ab7e-c2724e6d4d0c/debzz8z-7e2b3a9d-ae4b-4ad6-8837-d3f148f0b30c.png/v1/fit/w_300,h_900,q_70,strp/dispelled_by_yuu_kai_debzz8z-300w.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xNDU3IiwicGF0aCI6IlwvZlwvMmI0YWVhZWUtNmFlZS00YmM4LWFiN2UtYzI3MjRlNmQ0ZDBjXC9kZWJ6ejh6LTdlMmIzYTlkLWFlNGItNGFkNi04ODM3LWQzZjE0OGYwYjMwYy5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.O1SZawheYKGLgRJFW9HPv9R81xKhnIcrPSoR_A0nss4">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/kuro-creator/wangy-wangy-tool/css/style.css">
  <script src="https://cdn.jsdelivr.net/gh/kuro-creator/wangy-wangy-tool/js/tool.js"></script> 
</head>
<body>
    <nav>
        <h1>wangy wangy tool</h1>
    </nav>
    <div class="container">
        <div class="penjelasan">
        <h1>wangy tool</h1>
        <p>ini adalah web yang digunakan untuk membuat copypasta istri 2D kesayangan anda hanya dengan memasukan nama nya dan langsung bisa memilih template nya</p>
        </div>
        <div class="kotak-input">
            <p>masukan nama istri 2D mu</p>
            <input type="text" id="name">
            <button type="submit" id="btnAddName" onclick="inputnama()">Masukan nama</button>
            <div id="p"></div>
            <div class="pilih-template">
                <p>pilih template nya ngab</p>
                <button onclick="template1()">tipe 1</button>
                <button onclick="template2()">tipe 2</button>
                <button onclick="template3()">tipe 3</button>
                <button onclick="template4()">tipe 4</button>
            </div>
        </div>
        <div class="hasil">
            <p>hasil akan ditampilkan dibawah</p>
        </div>
        <div id="hasil"></div>
        <button id="copy" onclick="copysemua('hasil')">copy text</button>
    </div>
    <footer>
        <p>© 2021 Elaina Simping Feat. Rahman Onii-chan</p>
    </footer>
    <script src="tool.js"></script>
</body>`

async function handleRequest(request) {
  return new Response(html, {
    headers: {
      "content-type": "text/html;charset=UTF-8",
    },
  })
}

addEventListener("fetch", event => {
  return event.respondWith(handleRequest(event.request))
})
