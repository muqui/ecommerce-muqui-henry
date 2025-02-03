<h1> Instrucciones:</h1>
<p>Descargar o clonar el repositorio
dentro de la carpeta PM4-muqui/ecommerce-muqui
ejecutar el comando npm install</p> 
<p> cambiarse al directorio ecommerce-muqui y ejecutar el comando npm run start:dev </p>
<h2>Configuración del archivo .env </h2>
<p>Antes de iniciar la aplicación, asegúrate de configurar el archivo .env con la siguiente información. Crea un archivo .env en la raíz del proyecto y añade las siguientes variables de entorno:</p>
<table border="1">
  <thead>
    <tr>
      <th>Variable</th>
      <th>Valor</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DB_NAME</td>
      <td></td>
    </tr>
    <tr>
      <td>DB_HOST</td>
      <td></td>
    </tr>
    <tr>
      <td>DB_PORT</td>
      <td></td>
    </tr>
    <tr>
      <td>DB_USERNAME</td>
      <td></td>
    </tr>
    <tr>
      <td>DB_PASSWORD</td>
      <td></td>
    </tr>
    <tr>
      <td>CLOUDINARY_CLOUD_NAME</td>
      <td></td>
    </tr>
    <tr>
      <td>CLOUDINARY_API_SECRET</td>
      <td></td>
    </tr>
    <tr>
      <td>CLOUDINARY_API_KEY</td>
      <td></td>
    </tr>
  </tbody>
</table>
<p>Descripción de las variables:</p>
<ul>
  <li><strong>DB_NAME:</strong> Nombre de la base de datos en PostgreSQL.</li>
  <li><strong>DB_HOST:</strong> Dirección del servidor de la base de datos (usualmente localhost).</li>
  <li><strong>DB_PORT:</strong> Puerto en el que PostgreSQL está escuchando (por defecto es 5432).</li>
  <li><strong>DB_USERNAME:</strong> Nombre de usuario para conectarse a la base de datos.</li>
  <li><strong>DB_PASSWORD:</strong> Contraseña del usuario de la base de datos.</li>
  <li><strong>CLOUDINARY_CLOUD_NAME:</strong> Nombre de tu cuenta en Cloudinary.</li>
  <li><strong>CLOUDINARY_API_SECRET:</strong> Secreto de la API de Cloudinary.</li>
  <li><strong>CLOUDINARY_API_KEY:</strong> Clave de la API de Cloudinary.</li>
</ul>


<p> El servidor se ejecuta en la siguiente url: http://localhost:3000 <p> 
<h2> Documentación</h2>
<p> La documentacion del proyecto esta en al siguiente url: http://localhost:3000/api </p>

<p align="center" style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p align="center" style="line-height: 100%; margin-bottom: 0in"><font color="#800080"><b><font size="4" style="font-size: 14pt">Registrar</font>
post:</b></font></p>
<p style="line-height: 100%; margin-bottom: 0in">usuario:
<span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">/auth/signup</span></span></span></font></font></font></span></p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p align="center" style="line-height: 100%; margin-bottom: 0in"><font color="#800080"><b><span style="font-variant: normal"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal">Ingreso
post: </span></span></font></font></span></b></font>
</p>
<p style="font-variant: normal; letter-spacing: normal; font-style: normal; font-weight: normal; line-height: 100%; margin-bottom: 0in">
<font color="#000000"><font face="Times New Roman"><font size="4" style="font-size: 14pt">/auth/signin</font></font></font></p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">request
body: </span></span></span></font></font></font></span><code class="western"><span style="font-variant: normal"><font color="#ffffff"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">{</span></span></span></font></font></font></span></code></p>
<pre class="western" style="orphans: 2; widows: 2; border: none; padding: 0in; background: #333333"><code class="western"><span style="font-variant: normal"><font color="#ffffff"><span style="letter-spacing: normal">  </span></font></span></code><code class="western"><span style="font-variant: normal"><font color="#ffffff"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">&quot;email&quot;: </span></span></span></font></font></font></span></code><code class="western"><span style="font-variant: normal"><font color="#a2fca2"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">&quot;muqui@hotmail.com&quot;</span></span></span></font></font></font></span></code><code class="western"><span style="font-variant: normal"><font color="#ffffff"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">,</span></span></span></font></font></font></span></code>
<code class="western"><span style="font-variant: normal"><font color="#ffffff"><span style="letter-spacing: normal">  </span></font></span></code><code class="western"><span style="font-variant: normal"><font color="#ffffff"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">&quot;password&quot;: </span></span></span></font></font></font></span></code><code class="western"><span style="font-variant: normal"><font color="#a2fca2"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">&quot;123456&quot;</span></span></span></font></font></font></span></code>
<code class="western"><span style="font-variant: normal"><font color="#ffffff"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">}</span></span></span></font></font></font></span></code></pre><p style="line-height: 100%; margin-bottom: 0in">
<br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">response
body:</span></span></span></font></font></font></span></p>
<pre class="western"><code class="western"><span style="font-variant: normal"><font color="#ffffff"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">{</span></span></span></font></font></font></span></code>
<code class="western"><span style="font-variant: normal"><font color="#ffffff"><span style="letter-spacing: normal">  </span></font></span></code><code class="western"><span style="font-variant: normal"><font color="#ffffff"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">&quot;token&quot;: </span></span></span></font></font></font></span></code><code class="western"><span style="font-variant: normal"><font color="#a2fca2"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">&quot;eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11cXVpQGhvdG1haWwuY29tIiwiaWQiOjEsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNzM3NDgxMzEyLCJleHAiOjE3Mzc1Njc3MTJ9.6xDD35QZ_XAOqXeGL5kCrKEwEgEV2GD9y2um-rdV4e0&quot;</span></span></span></font></font></font></span></code><code class="western"><span style="font-variant: normal"><font color="#ffffff"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">,</span></span></span></font></font></font></span></code>
<code class="western"><span style="font-variant: normal"><font color="#ffffff"><span style="letter-spacing: normal">  </span></font></span></code><code class="western"><span style="font-variant: normal"><font color="#ffffff"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">&quot;email&quot;: </span></span></span></font></font></font></span></code><code class="western"><span style="font-variant: normal"><font color="#a2fca2"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">&quot;muqui@hotmail.com&quot;</span></span></span></font></font></font></span></code>
<code class="western"><span style="font-variant: normal"><font color="#ffffff"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">}</span></span></span></font></font></font></span></code></pre><p style="line-height: 100%; margin-bottom: 0in">
<br/>

</p>
<p align="center" style="line-height: 100%; margin-bottom: 0in"><font color="#55308d"><font size="4" style="font-size: 14pt"><span style="font-variant: normal"><font face="Times New Roman"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">solicitar
autorizacion para las url protegidas:</span></span></span></font></span></font></font></p>
<p align="center" style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">dar
clic en el boton authorize</span></span></span></font></font></font></span></p>
<p style="line-height: 100%; margin-bottom: 0in"><img src="test%20project%20con%20Swagger%20html_html_34ab546d.png" name="Image1" align="left" width="276" height="94" border="0"/>
<br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">Capturamos
el token que recibimos de la autorizacion:</span></span></span></font></font></font></span></p>
<p style="line-height: 100%; margin-bottom: 0in"><span style="font-variant: normal"><font color="#000000"><span style="letter-spacing: normal">
</span></font></span><code class="western"><span style="font-variant: normal"><font color="#000000"><font face="Consolas, monaco, monospace"><font size="2" style="font-size: 9pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im11cXVpQGhvdG1haWwuY29tIiwiaWQiOjEsInJvbGVzIjpbInVzZXIiXSwiaWF0IjoxNzM3NDgxMzEyLCJleHAiOjE3Mzc1Njc3MTJ9.6xDD35QZ_XAOqXeGL5kCrKEwEgEV2GD9y2um-rdV4e0</span></span></span></font></font></font></span></code></p>
<p style="line-height: 100%; margin-bottom: 0in"><img src="test%20project%20con%20Swagger%20html_html_e260ff64.png" name="Image2" align="left" width="449" height="202" border="0"/>
<br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p align="center" style="line-height: 100%; margin-bottom: 0in"><font color="#55308d"><b><span style="font-variant: normal"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal">Precarga
de datos</span></span></font></font></span></b></font></p>
<p align="center" style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><font size="3" style="font-size: 12pt"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">carga
de usuarios:   </span></span></span></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">/seeder/users
 </span></span></span></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">(ruta
protegida).</span></span></span></font></font></span></font></p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><font size="3" style="font-size: 12pt"><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">c</span></span></span></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">arga
de productos: </span></span></span></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">/seeder/products</span></span></span></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">
ruta protegida).</span></span></span></font></font></span></font></p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p align="center" style="line-height: 100%; margin-bottom: 0in"><font color="#55308d"><b><span style="font-variant: normal"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal">Categorias</span></span></font></font></span></b></font></p>
<p align="left" style="line-height: 100%; margin-top: 0.02in; margin-bottom: 0.02in">
<font color="#000000"><font size="3" style="font-size: 12pt"><b><span style="font-variant: normal"><font face="Times New Roman"><span style="letter-spacing: normal"><span style="font-style: normal">crear
categoria: </span></span></font></span></b><span style="font-variant: normal"><font face="Times New Roman"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">/categories</span></span></span></font></span></font></font></p>
<p style="line-height: 100%; margin-top: 0.02in; margin-bottom: 0.02in">
<span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">listar
todas las categorias: </span></span></span></font></font></font></span><span style="font-variant: normal"><font color="#000000"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">/categories</span></span></span></font></font></font></span></p>
<p style="line-height: 100%; margin-top: 0.02in; margin-bottom: 0.02in">
<font color="#ff0000"><span style="font-variant: normal"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">lista
una categoria por su id: </span></span></span></font></font></span><span style="font-variant: normal"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">/categories/{id}</span></span></span></font></font></span></font></p>
<p style="line-height: 100%; margin-top: 0.02in; margin-bottom: 0.02in">
<font color="#ff0000"><span style="font-variant: normal"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">actualiza
una categoria por su id: </span></span></span></font></font></span><span style="font-variant: normal"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">/categories/{id}</span></span></span></font></font></span></font></p>
<p style="line-height: 100%; margin-top: 0.02in; margin-bottom: 0.02in">
<font color="#ff0000"><span style="font-variant: normal"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">borra
una categoria: </span></span></span></font></font></span><span style="font-variant: normal"><font face="Times New Roman"><font size="4" style="font-size: 14pt"><span style="letter-spacing: normal"><span style="font-style: normal"><span style="font-weight: normal">/categories/{id}</span></span></span></font></font></span></font></p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>
<p style="line-height: 100%; margin-bottom: 0in"><br/>

</p>


