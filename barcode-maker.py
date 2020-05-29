from barcode import Code128
from barcode.writer import ImageWriter

with open('barcode.jpeg', 'wb') as f:
    Code128('201500192', writer=ImageWriter()).write(f)