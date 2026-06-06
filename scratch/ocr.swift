import Foundation
import PDFKit
import Vision
import AppKit

let pdfPath = "/Users/ryanmacmini/Desktop/1 App i made/Master Achieve Pack/achieve pack website/achieve-pack/public/spec/COA.pdf"
let pdfURL = URL(fileURLWithPath: pdfPath)
guard let document = PDFDocument(url: pdfURL) else {
    print("Failed to load PDF")
    exit(1)
}

guard let page = document.page(at: 0) else {
    print("Failed to load page 0")
    exit(1)
}

let bounds = page.bounds(for: .mediaBox)
let width = bounds.width * 2.0 // Scale up for better resolution
let height = bounds.height * 2.0

let colorSpace = CGColorSpaceCreateDeviceRGB()
guard let context = CGContext(
    data: nil,
    width: Int(width),
    height: Int(height),
    bitsPerComponent: 8,
    bytesPerRow: 0,
    space: colorSpace,
    bitmapInfo: CGImageAlphaInfo.premultipliedLast.rawValue
) else {
    print("Failed to create context")
    exit(1)
}

context.setFillColor(CGColor.white)
context.fill(CGRect(x: 0, y: 0, width: width, height: height))
context.scaleBy(x: 2.0, y: 2.0) // Match the scale factor

page.draw(with: .mediaBox, to: context)

guard let cgImage = context.makeImage() else {
    print("Failed to make CGImage")
    exit(1)
}

let requestHandler = VNImageRequestHandler(cgImage: cgImage, options: [:])
let request = VNRecognizeTextRequest { (request, error) in
    guard let observations = request.results as? [VNRecognizedTextObservation] else { return }
    for observation in observations {
        guard let candidate = observation.topCandidates(1).first else { continue }
        print(candidate.string)
    }
}

request.recognitionLevel = .accurate
request.usesLanguageCorrection = true

do {
    try requestHandler.perform([request])
} catch {
    print("Failed to perform OCR: \(error)")
}
