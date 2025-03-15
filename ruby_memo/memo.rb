require "csv"

puts "メモへの記述内容以外の入力もcsvファイルに保存されている問題の修正"

puts "1(新規でメモを作成) 2(既存のメモを編集する)"
memo_type= gets.chomp

if memo_type == "1"
  puts "拡張子を除いたファイル名を入力してください"
  memo_type = gets.chomp

  str  = memo_type
  puts "メモしたい内容を記入してください"
  puts "完了後、Ctrl + Dを押します"
  memo_type = $stdin.read
  CSV.open("#{str}.csv","a") do | csv |
    csv << ["#{memo_type}"]
  end

elsif memo_type == "2"
  puts "編集したいファイル名を入力してください"
  memo_type= gets.chomp

  str  = memo_type
  puts "編集内容を記入してください"
  puts "完了後、Ctrl + Dを押します"
  memo_type = $stdin.read
  CSV.open("#{str}.csv","a") do | csv |
    csv << ["#{memo_type}"]
  end

else
  puts "1か2を押してください"
end